import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../../components';
import { guide } from '../../mocks/guide';
import { messenger } from '../../mocks/messenger';

const { width, height } = Dimensions.get('window')


function TourGuide() {
    const { navigate } = useNavigation()

    const navigateToMsg = () => {
        navigate('Messenger')
    }
    return (
        <View style={styles.container}>
            <Header title="Tour Guide" />
            <View style={styles.containerData}>
                <Text>{moment(new Date()).format('DD MMMM YYYY')}</Text>
                <LinearGradient colors={['#4EA8DE', 'lightblue']} style={styles.listData}>
                    <FlatList
                        data={guide}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={item.avatar} style={styles.avatar} />
                                <View>
                                    <Text>{item.name}</Text>
                                    <View style={styles.row}>
                                        <Text>{item.rating} / 5</Text>
                                        <Image source={require('../../assets/star.png')} style={styles.star} />
                                    </View>
                                    <View style={styles.row}>
                                        {
                                            item.language.map(res => {
                                                return (
                                                    <Text style={styles.textLang} key={res}>{res}</Text>
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </LinearGradient>

                {/* Messenger */}
                <LinearGradient colors={['#4EA8DE', 'lightblue']} style={styles.listData}>
                    <TouchableOpacity onPress={navigateToMsg} style={styles.card}>
                        <Image style={styles.avatar} source={require('../../assets/orang3.png')} />
                        <View style={styles.containerMsg}>
                            <Text>{messenger[1].name}</Text>
                            <Text style={styles.textMsg} numberOfLines={2} ellipsizeMode="tail">{messenger[1].text}</Text>
                            <Text>2 Days ago</Text>
                        </View>

                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )
}

export default TourGuide

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerData: {
        marginTop: 120,
        marginHorizontal: 20
    },
    listData: {
        height: height * .3,
        width: width * .9,
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20,
        padding: 20
    },
    avatar: {
        height: 70,
        width: 70,
        marginRight: 50
    },
    card: {
        height: height * .14,
        borderBottomColor: '#00000050',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        height: 20,
        width: 20,
        marginLeft: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    textLang: {
        marginRight: 10
    },
    textMsg: {
        marginVertical: 10,
    },
    containerMsg: {
        width: width * .5,
    }
})