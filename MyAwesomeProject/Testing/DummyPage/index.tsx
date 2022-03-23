import React from 'react'
import { View, Text, Button } from 'react-native'

const DummyPage = ({route,navigation}) => {
    const {name} = route.params;
    const addNumbers = (n1,n2) => {
        return n1+n2;
    }
    return (
        <View>
            <Text>Welcome to JEST Testing</Text>
            <Text testID="paramName">{name}</Text>
            <Button title="Add" onPress={()=> console.warn(addNumbers(10,20))} />
        </View>
    )
}

export default DummyPage;
