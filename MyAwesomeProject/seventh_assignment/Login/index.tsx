import React, {useContext, useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
// import {useUserContext} from '../contexts/providers';
// import {useColorContext} from '../contexts/changeColor';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {selectUserInfo} from '../redux/slice';
import {currentUser} from '../redux/slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const LoginScreenSeventh = () => {
  const [userNameHandle, setUserName] = useState('');
  const [passwordHandle, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const usersInfo = useAppSelector(selectUserInfo);
  console.warn("users info", usersInfo?.username, "and ",usersInfo?.password);
  const dispatch = useAppDispatch();
  const userData = {
    username: userNameHandle,
    password: passwordHandle,
  };
  const displayData = useCallback(() => {
    if (userNameHandle !== '' && passwordHandle !== '') {
      dispatch(currentUser({usersInfo: userData}));
    } else {
      Alert.alert('Warning !!!', 'Please enter all the details');
    }
  }, [dispatch,userNameHandle, passwordHandle]);

  return (
    <View style={style.mainContainer}>
      <View style={style.subContainer}>
        <Text style={style.txt}>Login Form</Text>
        <TextInput
          style={style.inputs}
          placeholder="Enter Username"
          onChangeText={e => setUserName(e)}
          value={userNameHandle}
        />
        <View style={style.passwordField}>
          <TextInput
            secureTextEntry={isVisible}
            value={passwordHandle}
            placeholder="Enter Password"
            onChangeText={e => setPassword(e)}
          />
          <Icon
            name={isVisible ? 'eye-slash' : 'eye'}
            size={20}
            style={style.eye}
            onPress={() => setIsVisible(!isVisible)}
          />
        </View>
        <TouchableOpacity onPress={displayData} style={style.btn}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: 'white',
              marginTop: 10,
            }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreenSeventh;
