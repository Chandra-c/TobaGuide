import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { Header } from '../../components'

const { width, height } = Dimensions.get('window')

function DetailDestination({ route }) {
    const { data } = route.params
    return (
        <View style={styles.container}>
            <Header title={data.name} />
            <View style={styles.container}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.containerView}>
                    <Text style={styles.textTitle}>{data.name}</Text>
                    <Text>{data.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailDestination

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: height * .6,
        width,
        zIndex: -9999
    },
    containerView:{
        height: height * .5,
        width,
        backgroundColor: 'white',
        padding: 20,
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    textTitle: {
        color: '#56CFE1',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 20
    }
})