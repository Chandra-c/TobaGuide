import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { Header } from '../../components';
import { data } from '../../mocks/places';


const { width, height } = Dimensions.get('window')

function ListDestination() {
    const { navigate } = useNavigation()

    const handleDetail = (data) => {
        navigate('DetailDestination', { data })
    }

    return (
        <View style={styles.contaner}>
            <Header title="Waterfalls" />
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={(res, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => handleDetail(item)} style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.containerAction}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Image source={require('../../assets/like.png')} style={styles.suka} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ListDestination

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
    },
    card: {
        height: height * .3,
        width: width * 0.9,
        backgroundColor: '#00000010',
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    list: {
        marginTop: 120
    },
    image: {
        height: height * .3,
        width: width
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    containerAction: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width : width * .8,
        alignSelf: 'center',
        height: height * 0.05,
        backgroundColor: '#00000010',
        alignItems: 'center'
    },
    suka: {
        justifyContent: 'flex-end'
    }
})