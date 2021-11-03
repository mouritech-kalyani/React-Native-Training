import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
interface success{
    message:string
}
const Success = ({message}:success):JSX.Element => {
    return (
        <View>
            <Text style={styles.mainText}>{message}</Text>
        </View>
    )
}

export default Success
