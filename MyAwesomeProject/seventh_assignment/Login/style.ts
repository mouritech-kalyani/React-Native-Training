import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    margin: 20,
  },
  allText: {
    fontSize: 20,
  },
  inputs: {
    padding: 11,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 4,
  },
  passwordField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingRight: 20,
    marginTop: 20
  },
  passInput: {
    padding: 4,
    margin: 10,
  },
  eye: {
    marginTop: 15,
  },
  txt:{
    alignSelf:'center',fontSize:20,color:'black',marginBottom: 20
  },
  btn:{
      marginTop: 20,
      height: 50,
      width: 370,
      backgroundColor: '#787878',
      borderRadius: 5,
  }
});

export default style;
