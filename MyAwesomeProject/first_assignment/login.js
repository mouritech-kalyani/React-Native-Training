import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import formImage from '../assets/form.png';

const Login = () => {
  return (
    <View>
      <View style={styles.logo}>
        <Image source={formImage} style={styles.images} />
        {/* <Icon name="twitter" size={20} /> */}
      </View>
      <View style={styles.form}>
        <TextInput style={styles.inputFormItems} placeholder="Username " />
        <TextInput style={styles.inputFormItems} placeholder="Email " />
        <TextInput
          style={styles.inputFormItems}
          placeholder="Password "
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.register}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainLinks}>
        <View style={styles.links}>
          <Icon name="google" size={20} color="#0a83f5" />
        </View>
        <View style={styles.links}>
          <Icon name="twitter" size={20} color="#0a83f5" />
        </View>
        <View style={styles.links}>
          <Icon name="facebook" size={20} color="#0a83f5" />
        </View>
      </View>
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
    marginTop: -30,
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
    color: '#39c6ed',
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
export default Login;
