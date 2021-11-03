import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Fontisto';

const Climate = () => {
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.titleText}>San Francisco</Text>
        <View style={styles.rows}>
          <Icon2 name="day-rain" size={50} color="white" style={styles.icons} />
          <Text style={styles.timeStyle}> 16: 00</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.rows1}>
          <Text style={styles.temp}>Day Rain</Text>
          <Text style={styles.temp}>12.6 °C</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.titleText}>San Francisco</Text>
        <View style={styles.rows}>
          <Icon1
            name="rainy-outline"
            size={50}
            color="white"
            style={styles.icons}
          />
          <Text style={styles.timeStyle}> 19: 00</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.rows1}>
          <Text style={styles.temp}>Light Rain</Text>
          <Text style={styles.temp}>15.5 °C</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.titleText}>San Francisco</Text>
        <View style={styles.rows}>
          <Icon name="cloud" size={50} color="white" style={styles.icons} />
          <Text style={styles.timeStyle}> 22: 00</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.rows1}>
          <Text style={styles.temp}>Clear Sky</Text>
          <Text style={styles.temp}>19.6 °C</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#34aeeb',
    height: 170,
    borderRadius: 10,
    margin: 15,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    position: 'relative',
  },
  rows: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    marginTop: 50,
    width: '100%',
  },
  timeStyle: {
    color: 'white',
    fontSize: 40,
    width: '50%',
  },
  icons: {
    marginLeft: 20,
  },
  rows1: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    marginTop: 130,
    width: '90%',
    marginLeft: 20,
  },
  divider: {
    borderTopColor: 'white',
    borderTopWidth: 1,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
    marginTop: 120,
  },
  temp: {
    color: 'white',
    fontSize: 18,
  },
});
export default Climate;
