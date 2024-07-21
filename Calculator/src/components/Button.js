import React from "react";
import { StyleSheet, Text, Dimensions, touchableHighlight, Button, Touchable, TouchableHighlight } from 'react-native'

const style = StyleSheet.create({
    Button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderBlockColor: '#888',
    }
})

export default props => {
    return (
        <TouchableHighlight onPress={props.onPress}>
            <Text style={style.Button}>{props.label}</Text>
        </TouchableHighlight>
    )
}