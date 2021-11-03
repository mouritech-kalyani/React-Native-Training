import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './style';

const SplashScreen = ({navigation}) => {
  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    setInterval(() => {
        setBgColor(
          '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
        );
      }, 2000);  
    setInterval(() => {
      setBgColor(
        '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
      );
    }, 4000);
    setInterval(() => {
        setBgColor(
          '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
        );
        navigation.navigate('Registration');
      }, 7000);
    
  },[bgColor]);
  return (
    <View style={{backgroundColor: bgColor, flex: 1}}>
    </View>
  );
};

export default SplashScreen;
function timeout(ms: any) {
  throw new Error('Function not implemented.');
}

function ms(ms: any) {
  throw new Error('Function not implemented.');
}

function intervals(intervals: any) {
  throw new Error('Function not implemented.');
}
