import React from 'react';
import {View, Text, Switch} from 'react-native';

interface switchButton {
  isOn: boolean;
  title: string;
}
const Togglebutton = ({isOn, title}: switchButton): JSX.Element => (
  <View>
    {isOn ? (
      <Text>
        {title}: {'ON'}
      </Text>
    ) : (
      <Text>
        {title}: {'OFF'}
      </Text>
    )}
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      value={isOn}
      onValueChange={()=> {!isOn}}
    />
  </View>
);

export default Togglebutton;
