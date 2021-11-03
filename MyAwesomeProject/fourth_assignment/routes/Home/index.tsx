import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const Home = ({route, navigation}) => {
  const {name, username, password, emailId, phoneNumber} = route.params;
  return (
      <View>
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Name</Text>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Username</Text>
        <Text style={styles.textStyle}>{username}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Email Id</Text>
        <Text style={styles.textStyle}>{emailId}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Password</Text>
        <Text style={styles.textStyle}>{password}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Phone Number</Text>
        <Text style={styles.textStyle}>{phoneNumber}</Text>
      </View>
    </View>
     <Button
     title="Add another response"
     onPress={() => navigation.goBack()}
   />
    <Button
     title="Exit"
     onPress={() => navigation.navigate('Landing')}
   />
    </View>
  );
};

export default Home;
