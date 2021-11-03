import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignContent: 'center',
        margin: 20,
        marginTop: 50,
        marginBottom: 20,
        justifyContent: 'flex-start',
        
    },
    subContainer:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-between',
        padding: 10
    },
    textStyle:{
        fontSize: 20,
        color: 'black',

    }
   
})
export default styles;