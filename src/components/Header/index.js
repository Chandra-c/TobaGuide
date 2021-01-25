import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'

function Header(props) {
    const { title } = props,
        { goBack } = useNavigation()


    const handleBack = () => {
        goBack()
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBack} style={styles.containerBack}>
                <Image source={require('../../assets/back.png')} style={styles.backAction} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )

}

export default Header

const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('window').height * .08,
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 999
    },
    backAction: {
        height: 30,
        width: 45,
    },
    containerBack: {
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
    }
})