import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Button, CustomView } from '../../components/'


const { width, height } = Dimensions.get('window')


function Login({ navigation }) {

    const Form = () => {
        const navigateSignUp = () => {
            navigation.navigate('Register')
        }
        const navigateForgotPassword = () => {
            navigation.navigate('ForgotPassword')
        }
        const navigateHome = () => {
            navigation.navigate('Home')
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
                <View style={styles.action}>
                    <TouchableOpacity onPress={navigateSignUp}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateForgotPassword}>
                        <Text>Lost Password</Text>
                    </TouchableOpacity>
                </View>
                <Button title="Connect" onPress={navigateHome} />
            </View>
        )
    }

    const TopImage = () => (
        <View style={styles.containerImage}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <Text style={styles.textLogo}>Toba Guide</Text>
                <Text style={styles.textLogoSub}>Experience the real Lake Toba</Text>
            </View>
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
    },
    inisial: {
        width: width * 0.95,
        marginBottom: 10
    },
    logo: {
        height: width * 0.4,
        width: width * 0.4,
        alignSelf: 'center'
    },
    containerLogo: {
        position: 'absolute',
        zIndex: 1000,
        top: height * 0.25,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    textLogo: {
        color: 'white',
        fontSize: 50,
        fontWeight: '700',
        marginTop: 10
    },
    textLogoSub: {
        color: 'white',
        fontSize: 20,
        marginTop: 10
    }
})

export default Login