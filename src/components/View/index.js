import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function CustomView(props) {
    // definisi props
    const { children } = props
    return (
            <LinearGradient colors={['#112266', '#5E60CE', '#4EA8DE', '#56CFE1', '#72EFDD']} style={styles.container} >
                {children}
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CustomView