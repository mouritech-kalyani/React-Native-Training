import React, {useState, useCallback} from 'react';
import {Button, BackHandler, Switch} from 'react-native';
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
const Stack = createNativeStackNavigator();

const MainRoute = ({navigation}) => {
  const {updateColorInfo} = useColorContext();
  const {updateUserInfo, userInfo} = useUserContext();
  
  const {colorInfo} = useColorContext();
  const [isToggle, setIsToggle] = useState(false);

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
          <Stack.Screen name="UseProviders" component={Page} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MainRoute;
