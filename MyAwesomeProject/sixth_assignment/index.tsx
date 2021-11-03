import React, {useState, useCallback} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useUserContext} from './contexts/providers';
import {useColorContext} from './contexts/changeColor';
import Welcome from './Home';
import Login from './Login';
import styles from './style';

export default function Page({navigation}) {
  const {colorInfo} = useColorContext();
  const {updateUserInfo, userInfo} = useUserContext();
  const [userNameHandle, setUserName] = useState('');
  const [passwordHandle, setPassword] = useState('');
  const userData = {
    username: userNameHandle,
    password: passwordHandle,
  };
  const displayData = useCallback(() => {
    updateUserInfo(userData);
  }, [updateUserInfo, userData]);

  return (
    <>
      {userInfo !== null &&
      userInfo.username !== '' &&
      userInfo.password !== '' ? (
        <View style={{backgroundColor: colorInfo?.color, flex: 1}}>
          <Button
            title="Logout"
            onPress={() => {
                const userData ={
                    username: null,
                    password: null
                }
              updateUserInfo(userData);
              navigation.navigate('LoginScreen');
            }}
          />
          <View>
            <View style={styles.container}>
              <Text
                style={{
                  fontSize: 20,
                  color: colorInfo?.color === 'black' ? 'white' : 'black',
                  alignSelf: 'center',
                  marginBottom: 30,
                }}>
                Welcome
              </Text>
              <View style={styles.subContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    color: colorInfo?.color === 'black' ? 'white' : 'black',
                  }}>
                  Username
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: colorInfo?.color === 'black' ? 'white' : 'black',
                  }}>
                  {userInfo?.username}
                </Text>
              </View>
              <View style={styles.subContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    color: colorInfo?.color === 'black' ? 'white' : 'black',
                  }}>
                  Password
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: colorInfo?.color === 'black' ? 'white' : 'black',
                  }}>
                  {userInfo?.password}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
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
            placeholderTextColor={
              colorInfo?.color === 'black' ? 'white' : 'black'
            }
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
            placeholderTextColor={
              colorInfo?.color === 'black' ? 'white' : 'black'
            }
            placeholder="Enter Password"
            onChangeText={e => setPassword(e)}
          />
          <Button onPress={displayData} title="Log in" />
        </View>
      )}
    </>
  );
}
