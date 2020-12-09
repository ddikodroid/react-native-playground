import React from 'react'
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native'
import DataDetailsScreen from './DataDetailsScreen'


const RegistrationScreen = ({navigation}) => {
    const Move = () => {
        navigation.navigate("Data Details")
    }
    return (
        <View style={s.flexArea}>
            <Button onPress={Move} title="Register"/>
        </View>
    )
}

export default RegistrationScreen

const s = StyleSheet.create({
    flexArea: {
        width: Dimensions.get('window').width-10,
        height: Dimensions.get('window').height/10,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },

})
