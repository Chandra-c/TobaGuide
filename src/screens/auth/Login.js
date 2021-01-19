import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Button, CustomView } from '../../components/'


const { width, height } = Dimensions.get('window')


function Login() {

    const Form = () => (
        <View style={styles.containerForm}>
            <TextInput placeholder="Username" style={styles.textInput} />
            <TextInput placeholder="Password" style={styles.textInput} />
            <View style={styles.action}>
                <TouchableOpacity>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Lost Password</Text>
                </TouchableOpacity>
            </View>
            <Button title="Sign In" />
        </View>
    )

    const TopImage = () => (
        <View style={styles.containerImage}>
            <Image source={require('../../assets/background.png')} style={styles.imageTop} />
        </View>
    )

    return (
        <CustomView>
            <TopImage />
            <Form />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 20,
        width: width - 40
    },
    containerImage: {
        height: height * 0.6,
        width
    },
    imageTop: {
        height: height * 0.6,
        width
    },
    action: {
        flexDirection: 'row',
        width: width * 0.9,
        marginBottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default Login