import React, {useContext, useCallback, useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {useUserContext} from '../contexts/providers';
import {useColorContext} from '../contexts/changeColor';

const LoginScreen = () => {
  const [userNameHandle, setUserName] = useState('');
  const [passwordHandle, setPassword] = useState('');
  const {updateUserInfo} = useUserContext();
  const {colorInfo} = useColorContext();

  const userData = {
    username: userNameHandle,
    password: passwordHandle,
  };
  const displayData = useCallback(() => {
    if (userNameHandle !== '' && passwordHandle !== '') {
      updateUserInfo(userData);
    }else{
      Alert.alert("Warning !!!","Please enter all the details")
    }
  }, [updateUserInfo, userData]);

  return (
    <View style={{backgroundColor: colorInfo?.color, flex: 1}}>
      <Text
        style={{
          color: colorInfo?.color === 'black' ? 'white' : 'black',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        {' '}
        Login Form
      </Text>
      <TextInput
        style={{
          backgroundColor: colorInfo?.color,
          color: colorInfo?.color === 'black' ? 'white' : 'black',
          borderColor: colorInfo?.color === 'black' ? 'white' : 'black',
          margin: 20,
          borderWidth: 1,
        }}
        placeholderTextColor={colorInfo?.color === 'black' ? 'white' : 'black'}
        placeholder="Enter Username"
        onChangeText={e => setUserName(e)}
      />
      <TextInput
        secureTextEntry={true}
        style={{
          backgroundColor: colorInfo?.color,
          color: colorInfo?.color === 'black' ? 'white' : 'black',
          borderColor: colorInfo?.color === 'black' ? 'white' : 'black',
          margin: 20,
          borderWidth: 1,
        }}
        placeholderTextColor={colorInfo?.color === 'black' ? 'white' : 'black'}
        placeholder="Enter Password"
        onChangeText={e => setPassword(e)}
      />
      <Button onPress={displayData} title="Log in" />
    </View>
  );
};

export default LoginScreen;
