import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const DataDetailsScreen = ({navigation}) => {
    return (
        <View style={s.flexArea}>
            <Text>DataDetails</Text>
        </View>
    )
}

export default DataDetailsScreen

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