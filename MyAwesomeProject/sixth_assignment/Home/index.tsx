import React, {useState} from 'react';
import {View, Text, Button, BackHandler} from 'react-native';
import {useColorContext} from '../contexts/changeColor';
import styles from './style';
import {useUserContext} from '../contexts/providers';
import Login from '../Login';

const Welcome = () => {
  const {colorInfo} = useColorContext();
  const {userInfo} = useUserContext();
  return (
    <View style={{backgroundColor: colorInfo?.color, flex: 1}}>
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
     );
};

export default Welcome;


