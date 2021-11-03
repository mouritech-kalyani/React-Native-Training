import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UseCallbacks = () => {
  const [bgColor, setBgColor] = useState('red');
  const onClickFun = useCallback(() => {
    setBgColor(
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
    );
  }, [bgColor]);
  return (
    <>
      <Button title={'Change Color'} onPress={onClickFun} />
      <View style={{backgroundColor: bgColor, flex: 1}}></View>
      
    </>
  );
};

export default UseCallbacks;
