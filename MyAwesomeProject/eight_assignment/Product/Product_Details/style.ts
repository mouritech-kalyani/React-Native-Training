import React from 'react';
import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  grids: {
    flex: 1,
    margin: 5,
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 5,
    margin: 10,
  },
  review: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addToCart: {
    height: 30,
    width: 150,
    //borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#F08080',
    //backgroundColor:'#F08080',
    alignSelf: 'center',
  },
  wishlistBtn: {
    //marginTop: 50,
    //    position:'absolute',
    //    bottom: 50,
    top: 10,
    height: 50,
    width: 100,
    zIndex: -1,
    backgroundColor: '#F08080',
  },
  price: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  rating: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 20,
  },
});

export default style;
