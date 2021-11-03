import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Boxes = () => {
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.rowsContainer}>
        <View style={styles.box1}>
          <Text style={styles.subTitles}>TURQUISH</Text>
          <Text style={styles.subTitles1}>#1abc9c</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.subTitles}>EMERALD</Text>
          <Text style={styles.subTitles1}>#2ecc71</Text>
        </View>
      </View>
      <View style={styles.rowsContainer}>
        <View style={styles.box3}>
          <Text style={styles.subTitles}>PETER RIVER</Text>
          <Text style={styles.subTitles1}>#3498db</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.subTitles}>AMETHYST</Text>
          <Text style={styles.subTitles1}>#9b59b6</Text>
        </View>
      </View>
      <View style={styles.rowsContainer}>
        <View style={styles.box5}>
          <Text style={styles.subTitles}>WET ASPHALT</Text>
          <Text style={styles.subTitles1}>#34495e</Text>
        </View>
        <View style={styles.box6}>
          <Text style={styles.subTitles}>GREEN SEA</Text>
          <Text style={styles.subTitles1}>#16a085</Text>
        </View>
      </View>
      <View style={styles.rowsContainer}>
        <View style={styles.box7}>
          <Text style={styles.subTitles}>NEPHRITIS</Text>
          <Text style={styles.subTitles1}>#27ae60</Text>
        </View>
        <View style={styles.box8}>
          <Text style={styles.subTitles}>BELIZE HOLE</Text>
          <Text style={styles.subTitles1}>#2980b9</Text>
        </View>
      </View>
      {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    //flex: 1,
    flexDirection: 'column',
  },
  rowsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box1: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#1abc9c',
  },
  box2: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#2ecc71',
  },
  box3: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  box4: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#9b59b6',
  },
  box5: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#34495e',
  },
  box6: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#16a085',
  },
  box7: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#27ae60',
  },
  box8: {
    height: 150,
    width: '45%',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#2980b9',
  },
  subTitles: {
    color: 'white',
    marginTop: 80,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  subTitles1: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
  },
});
export default Boxes;
