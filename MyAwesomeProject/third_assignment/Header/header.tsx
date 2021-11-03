import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

interface headerData{
    title:string,
    button:JSX.Element
}
const FormHeader = ({title,button}:headerData) => (
        <View>
            <View style={styles.headerContainer}>
               <Text style={styles.headerText}>{title}</Text>
               {button} 
            </View>
        </View>
    )

export default FormHeader
