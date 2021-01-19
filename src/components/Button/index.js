import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const {width, height} = Dimensions.get('window')

function Button(props) {
    // definisi props
    const { title, style, onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#112266', '#5E60CE', '#4EA8DE', '#56CFE1', '#72EFDD']} style={[styles.container, style]} >
              <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
        width: width /1.5,
        borderRadius: 100
    },
    text:{
        color: 'white'
    }
})

export default Button