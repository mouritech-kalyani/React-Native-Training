
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import HomeSeven from '../Home';
import Wishlist from '../Wishlist';
const homeStack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <>
        <homeStack.Screen name="HomeSeven" component={HomeSeven} />
        
        {/* <homeStack.Screen name="Wishlist" component={Wishlist} /> */}
        </>


    )
}

export default HomeStack
