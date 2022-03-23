import React, {useState, useCallback} from 'react';
import {Button, BackHandler, Switch, Text, Pressable} from 'react-native';
import Boxes from '../first_assignment/boxes';
import Climate from '../first_assignment/climate';
import Login from '../first_assignment/login';
import Togglebutton from '../second_assignment/togglebutton';
import Header from '../third_assignment';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../fourth_assignment/routes/Splash';
import Home from '../fourth_assignment/routes/Home';
import Registration from '../fourth_assignment/routes/Registration';
import Landingpage from '../landingpage';
import RegistrationS from '../fifth_assignment/Registration';
import Dashboard from '../fifth_assignment/Home';
import UseCallbacks from '../sixth_assignment/Usecallbacks';
import Page from '../sixth_assignment';
import {ChangeUserProvider} from '../sixth_assignment/contexts/providers';
import {useUserContext} from '../sixth_assignment/contexts/providers';
import {useColorContext} from '../sixth_assignment/contexts/changeColor';
import Welcome from '../sixth_assignment/Home';
import LoginScreen from '../sixth_assignment/Login';
import SeventhAssignment from '../seventh_assignment';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppSelector} from '../seventh_assignment/redux/hooks';
import {selectUserInfo} from '../seventh_assignment/redux/slice';
import {useWishlistSelector} from '../seventh_assignment/redux/hooks/wishlisthooks';
import {selectWishlistInfo} from '../seventh_assignment/redux/slice/wishlistslice';
import Wishlist from '../seventh_assignment/Wishlist';
import HomeSeven from '../seventh_assignment/Home';
import AllProducts from '../eight_assignment/Product/All_Products';
import Productdetail from '../eight_assignment/Product/Product_Details';
import TestingLogin from '../Testing/Login';
import DummyPage from '../Testing/DummyPage';
const Stack = createNativeStackNavigator();

const MainRoute = ({navigation}) => {
  const {updateColorInfo} = useColorContext();
  const {updateUserInfo, userInfo} = useUserContext();

  const {colorInfo} = useColorContext();
  const [isToggle, setIsToggle] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const usersInfo = useAppSelector(selectUserInfo);

  const wishlistInfo = useWishlistSelector(selectWishlistInfo);
  const Productusername = usersInfo?.username;
  const Productpassword = usersInfo?.password;

  const setThemeForApp = useCallback(() => {
    setIsToggle(!isToggle);
    if (isToggle) {
      const colorData = {
        color: 'white',
      };
      updateColorInfo(colorData);
    } else {
      const colorData = {
        color: 'black',
      };
      updateColorInfo(colorData);
    }
  }, [isToggle, updateColorInfo, colorInfo]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Landing'}
        screenOptions={{
          headerRight: () => (
            <Switch value={isToggle} onValueChange={setThemeForApp} />
          ),
        }}>

        {/* Landing Page to see each assignment */}
        <Stack.Screen name="Landing" component={Landingpage} />

        {/* Assignment no 1 - display flex boxes */}
        <Stack.Screen name="Boxes" component={Boxes} />

        {/* Assignment no 1 - display login screen */}
        <Stack.Screen name="Login" component={Login} />

        {/* Assignment no 1 - display climat cards */}
        <Stack.Screen name="Climate" component={Climate} />

        {/* Assignment no 2 - send values from main file with interface */}
        <Stack.Screen name="Toggle" component={Togglebutton} />

        {/* Assignment no 3 - Registration page with all validation and success message */}
        <Stack.Screen name="RegistrationVal" component={Header} />

        {/* Assignment no 4 - Splash screen with registration form and home screen  */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={Home} />

        {/* Assignment no 5 - Splash screen - registration - home - back button  => exit/close/minimize app */}
        <Stack.Screen name="Signup" component={RegistrationS} />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerLeft: () => (
              <Button
                title="Back"
                onPress={() => {
                  BackHandler.exitApp();
                }}
              />
            ),
          }}
        />

        {/* Assignment no 6 - Use callback*/}
        <Stack.Screen name="UseCallBack" component={UseCallbacks} />

        {/* Assignment no 7 - Use callback & providers*/}

        {/* If we have logged in user then show logout else hide */}
        {userInfo !== null ? (
          <Stack.Screen
            name="UseProviders"
            component={Page}
            options={{
              headerLeft: () => (
                <Button
                  title="Logout"
                  onPress={() => {
                    const userData = {
                      username: '',
                      password: '',
                    };
                    updateUserInfo(userData);
                  }}
                />
              ),
            }}
          />
        ) : (
          <Stack.Screen name="UseProviders" component={Page} />
        )}

        {/* Product Details Redux*/}
        {/* show wishlist items */}
        {
          // <Stack.Screen name="Wishlist" component={Wishlist} />
        }
        

        {(Productusername === '' || Productusername === undefined) &&
        (Productpassword === '' || Productpassword === undefined) ? (
          <Stack.Screen name="Shopping" component={SeventhAssignment} />
        ) : wishlistInfo?.length > 0 ? (
          <Stack.Screen
            name="Shopping"
            component={SeventhAssignment}
            options={{
              headerRight: () => (
                <Pressable
                  onPress={() => {
                   // return <Wishlist/>
                    // setIsClicked(true);
                    // console.log('clicked', isClicked);
                    //navigation.navigate('Wishlist');
                  }}>
                  <Icon name="heart" size={40} color="#DC143C" />
                  <Text
                    style={{
                      fontSize: 18,
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      marginTop: 7,
                      color: 'white',
                      borderRadius: 5,
                      position: 'absolute',
                    }}>
                    {wishlistInfo?.length}
                  </Text>
                </Pressable>
              ),
            }}
          />
        ) : (
          <Stack.Screen name="Shopping" component={SeventhAssignment} />
        )}
       
         <Stack.Screen name="Wishlist" component={Wishlist} />
         <Stack.Screen name="HomeSeven" component={HomeSeven} />
         
         {/* Redux saga product details */}
         <Stack.Screen name="Products" component={AllProducts} />
        <Stack.Screen name="Product" component={Productdetail} />
        <Stack.Screen name="TestLogin" component={TestingLogin} />
        <Stack.Screen name="DummyPage" component={DummyPage} />
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={Welcome} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
