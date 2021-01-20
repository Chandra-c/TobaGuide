import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Button, CustomView } from "../../components/";

const { width, height } = Dimensions.get('window')

function Register({ navigation }){

    const Form = () => {
        const navigateLogin = () => {
            navigation.navigate('Login')
        }
        return (
            <View style={styles.containerForm}>
                <View style={styles.inisial}>
                    <Text>Email</Text>
                </View>
                <TextInput placeholder="" style={styles.textInput} />
                <View style={styles.inisial}>
                    <Text>Password</Text>
                </View>
                <TextInput placeholder="" secureTextEntry={true} style={styles.textInput} />
                <View style={styles.inisial}>
                    <Text>Date Of Birth</Text>
                </View>
                <TextInput placeholder=""  style={styles.textInput} />
                <View style={styles.inisial}>
                    <Text>Country</Text>
                </View>
                <TextInput placeholder="" style={styles.textInput} />
                <View style={styles.action}>
                    <TouchableOpacity onPress={navigateLogin}>
                        <Text>Back to Login?</Text>
                    </TouchableOpacity>
                </View>
                <Button title="Sign Up" />
            </View>
        )
    }

    return(
        <CustomView>
            <TopImage />
            <Form />
        </CustomView>
    )
}

const TopImage = () => (
    <View style={styles.containerImage}>
        <View style={styles.containerLogo}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.textLogo}>Toba Guide</Text>
       </View>
    </View>
)
const styles = StyleSheet.create({
    containerForm: {
        margin: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 20,
        width: width - 40,
    },
    containerImage: {
        height: height * 0.4,
        width
    },
    imageTop: {
        height: height * 0.4,
        width
    },
    action: {
        flexDirection: 'row',
        width: width * 0.9,
        marginBottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    inisial: {
        width: width * 0.95,
        marginBottom: 10
    },
    logo: {
        height: width * 0.4,
        width: width * 0.4,
        alignSelf: 'center',
    },
    containerLogo: {
        position: 'absolute',
        zIndex: 1000,
        top: height * 0.12,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    textLogo: {
        color: 'white',
        fontSize: 50,
        fontWeight: '700',
        marginTop: 10,
        height : 50
    },
})


export default Register