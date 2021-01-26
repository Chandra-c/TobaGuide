import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Header } from '../../components'

const { width, height } = Dimensions.get('window')

function DetailDestination({ route, navigation }) {
    const { data } = route.params

    const naigateTourGuide = () => {
        navigation.navigate('TourGuide')
    }
    return (
        <View style={styles.container}>
            <Header title={data.name} />
            <View style={styles.container}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.containerView}>
                    <Text style={styles.textTitle}>{data.name}</Text>
                    <Text>{data.description}</Text>
                    <View style={styles.actionBottom}>
                        <TouchableOpacity onPress={naigateTourGuide}>
                            <Image style={styles.bottomImage} source={require('../../assets/tourguide.png')} />
                        </TouchableOpacity>
                        <Image style={styles.bottomImage} source={require('../../assets/lokasi.png')} />
                    </View>
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
    containerView: {
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
    },
    bottomImage: {
        height: 50,
        width: 50
    },
    actionBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: width * .9,
        height: height * .2,
        backgroundColor: 'white'
    }
})