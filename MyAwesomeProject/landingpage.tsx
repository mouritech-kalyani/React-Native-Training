import React from 'react';
import {View, Button, ScrollView} from 'react-native';
import styles from './landing';
const Landingpage = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Button
          title="First Assignment - Login"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="First Assignment - Boxes"
          onPress={() => {
            navigation.navigate('Boxes');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="First Assignment - Climate"
          onPress={() => {
            navigation.navigate('Climate');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Second Assignment - Toggle"
          onPress={() => {
            navigation.navigate('Toggle', {isOn: false, title: 'Button is'});
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Third Assignment - Interface - Registration"
          onPress={() => {
            navigation.navigate('RegistrationVal');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Fourth Assignment - Navigation - Registration"
          onPress={() => {
            navigation.navigate('SplashScreen');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Fifth Assignment - Splash - Navigation - Registration"
          onPress={() => {
            navigation.navigate('Signup');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Sixth Assignment - Usecallback"
          onPress={() => {
            navigation.navigate('UseCallBack');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="seventh Assignment - context api"
          onPress={() => {
            navigation.navigate('UseProviders');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Eight Assignment - Redux"
          onPress={() => {
            navigation.navigate('Shopping');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Wishlists"
          onPress={() => {
            navigation.navigate('Wishlist');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Redux-Saga"
          onPress={() => {
            navigation.navigate('Products');
          }}
        />
      </View>
      
      <View style={styles.subContainer}>
        <Button
          title="Test Log in Screen"
          onPress={() => {
            navigation.navigate('TestLogin');
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Test Dummy Screen"
          onPress={() => {
            navigation.navigate('DummyPage',{name:"Kalyani"});
          }}
        />
      </View>

    </View>
    </ScrollView>
  );
};

export default Landingpage;
