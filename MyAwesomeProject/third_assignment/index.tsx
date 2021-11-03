import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, ScrollView, Modal} from 'react-native';
import FormHeader from './Header/header';
import Success from './RegistrationSuccess';
import styles from './style';

const Index = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [nameError, setNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const nameValidate = /^[a-zA-Z]*$/;
  const userNameValidate = /^[a-zA-Z0-9]+$/;
  const emailValidate =
    /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

  useEffect(() => {
    if (
      nameError == '' &&
      userNameError == '' &&
      emailError == '' &&
      phoneNumberError == '' &&
      passwordError == '' &&
      name.length > 1 &&
      username.length > 1 &&
      emailId.length > 1 &&
      password.length > 1 &&
      phoneNumber
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  });
  return (
    <View>
     
      {
          isSuccess ?
          <Success message="Registration Successful"/> : 
          <><FormHeader
                      title="Registration Form"
                      button={<Button
                          title="Register"
                          color="blue"
                          disabled={isDisable}
                          onPress={() => setIsSuccess(true)} />} /><ScrollView>
                          <View style={styles.registrationForm}>
                              <TextInput
                                  style={styles.inputBox}
                                  placeholder="Enter Name"
                                  value={name}
                                  onChangeText={e => {
                                      if (e.match(nameValidate)) {
                                          setName(e);
                                          setNameError('');
                                      } else {
                                          setNameError('Should be only characters without space');
                                      }
                                  } } />
                              <Text style={styles.errorStyle}>{nameError}</Text>
                              <TextInput
                                  style={styles.inputBox}
                                  placeholder="Enter Username"
                                  value={username}
                                  onChangeText={e => {
                                      if (e.match(userNameValidate)) {
                                          setUsername(e);
                                          setUserNameError('');
                                      } else {
                                          setUserNameError('No Space/Empty/Should contain alphanumeric');
                                      }
                                  } } />
                              <Text style={styles.errorStyle}>{userNameError}</Text>
                              <TextInput
                                  style={styles.inputBox}
                                  placeholder="Enter Email Id"
                                  onChangeText={e => {
                                      if (e.match(emailValidate)) {
                                          setEmailId(e);
                                          setEmailError('');
                                      } else {
                                          setEmailError('Please Enter valid Email');
                                      }
                                  } } />
                              <Text style={styles.errorStyle}>{emailError}</Text>
                              <TextInput
                                  style={styles.inputBox}
                                  placeholder="Enter Password"
                                  maxLength={6}
                                  onChangeText={e => {
                                      if (e.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)) {
                                          setPassword(e);
                                          setPasswordError('');
                                      } else {
                                          setPasswordError(
                                              'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                                          );
                                      }
                                  } } />
                              <Text style={styles.errorStyle}>{passwordError}</Text>
                              <TextInput
                                  style={styles.inputBox}
                                  placeholder="Enter Contact Number"
                                  keyboardType="numeric"
                                  maxLength={10}
                                  onChangeText={e => {
                                      if (e.length == 10) {
                                          setPhoneNumber(parseInt(e));
                                          setPhoneNumberError('');
                                      } else {
                                          setPhoneNumberError('Please enter valid contact number');
                                      }
                                  } } />
                              <Text style={styles.errorStyle}>{phoneNumberError}</Text>
                          </View>
                      </ScrollView></>
      }
      
    </View>
  );
};

export default Index;
function r(r: any, arg1: string) {
  throw new Error('Function not implemented.');
}
