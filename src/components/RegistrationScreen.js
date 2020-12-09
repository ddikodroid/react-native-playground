import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import DataDetailsScreen from './DataDetailsScreen'


const RegistrationScreen = ({navigation}) => {
    const Move = () => {
        navigation.navigate("Data Details")
    }
    return (
        <View>
            <Button onPress={Move} title="Register"/>
        </View>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({})
