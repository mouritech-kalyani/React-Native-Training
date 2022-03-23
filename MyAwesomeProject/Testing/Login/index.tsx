import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
} from '../../seventh_assignment/redux/hooks';
import {callValidateUser, ValidateUserAuthInfo} from '../Slice';

const TestingLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const usersInfo = useAppSelector(ValidateUserAuthInfo);
  const dispatch = useAppDispatch();
  const userData = {
    email: username,
    password: password,
  };
  console.log(
    'users info after login',
    usersInfo.isLoading,
    usersInfo.validateUserResponse?.token,
    usersInfo.validateUserError?.error,
  );

  const Login = () => {
    //Alert.alert('Logged in');
    dispatch(callValidateUser(userData));
    if (
      usersInfo.validateUserError?.error
    ) {
      setFormError('Please check username and password');
    }else{
      setFormError('');
      Alert.alert('Logged in');
    }
  };
  return (
    <View>
      {formError !== '' ? (
        <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>
          {formError}
        </Text>
      ) : null}
      <View style={styles.form}>
        <TextInput
          testID="username"
          style={styles.inputFormItems}
          placeholder="Enter Username"
          value={username}
          onChangeText={e => setUsername(e)}
        />
        <TextInput
          testID="password"
          style={styles.inputFormItems}
          placeholder="Enter Password"
          value={password}
          onChangeText={e => setPassword(e)}
          secureTextEntry={true}
        />
        {usersInfo.isLoading ? (
          <ActivityIndicator
            size={40}
            style={{alignContent: 'center', marginTop: 20}}
            color={'blue'}
          />
        ) : (
          <TouchableOpacity
            style={styles.register}
            onPress={() => Login()}
            testID="login">
            <Text style={styles.text}>Log in</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* <View style={styles.mainLinks}>
        <View style={styles.links}>
          <Icon name="google" size={20} color="#0a83f5" />
        </View>
        <View style={styles.links}>
          <Icon name="twitter" size={20} color="#0a83f5" />
        </View>
        <View style={styles.links}>
          <Icon name="facebook" size={20} color="#0a83f5" />
        </View>
      </View> */}
      <Text style={styles.login}>
        {'Already have an account?'}
        <Text style={{fontWeight: 'bold'}}>{' Login'}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logo: {
    height: '50%',
    width: '100%',
  },
  form: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  images: {
    width: 420,
    height: 250,
  },
  inputFormItems: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 18,
    //color: '#39c6ed',
    borderBottomWidth: 1,
    borderColor: '#39c6ed',
  },
  register: {
    height: 50,
    width: 320,
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#55f2dd',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainLinks: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  links: {
    marginTop: 30,
    borderWidth: 1,
    width: 90,
    height: 40,
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 10,
    borderColor: '#3590e6',
    borderRadius: 5,
  },
  login: {
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#3590e6',
  },
});
export default TestingLogin;
