import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { menu } from '../../mocks/menu'
import { data } from '../../mocks/places'

const { width, height } = Dimensions.get('window')

function Home() {

    const { navigate } = useNavigation()

    const Header = () => {
        return (
            <View style={styles.containerHeader}>
                <View style={styles.containerData}>
                    <Text style={styles.textHeader}>Wellcome back Chandra</Text>
                    <View style={styles.avatar} />
                </View>
                <TextInput placeholder="Search place here" style={styles.searchBar} />
            </View>
        )
    }

    const ListDestination = () => {
        const handleDetail = (data) => {
            navigate('DetailDestination', { data })
        }

        const handleList = () => {
            navigate('ListDestination')
        }
        return (
            <View>
                <View style={styles.headerList}>
                    <Text style={styles.textHeaderList}>Recomended</Text>
                    <TouchableOpacity onPress={handleList}>
                        <Text>See All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => handleDetail(item)} activeOpacity={0.7} style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={styles.info}>
                                    <Text>{item.name}</Text>
                                    <View style={styles.rating}>
                                        {
                                            [...Array(item.rating)].map((res, index) => {
                                                return (
                                                    <Image key={index} source={require('../../assets/star.png')} style={styles.star} />
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    const Menu = () => {
        return (
            <LinearGradient colors={['#112266', '#5E60CE', '#4EA8DE', '#56CFE1', '#72EFDD']} style={styles.containerMenu}>
                <FlatList
                    data={menu}
                    numColumns={3}
                    style={styles.list}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.box}>
                                <Image source={item.image} style={styles.imageMenu}/>
                                <Text style={styles.textMenu}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </LinearGradient>
        )
    }

    return (
        <ScrollView bounces={false} style={styles.container}>
            <Header />
            <ListDestination />
            <Menu />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        paddingHorizontal: 25,
        height: height * 0.1,
        marginTop: 50,
        marginBottom: 80
    },
    containerData: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchBar: {
        backgroundColor: 'lightgrey',
        marginTop: 30,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'center',
        width: width * .88
    },
    textHeader: {
        fontSize: 27,
        color: 'grey',
        fontWeight: '800',
        width: width * .6
    },
    avatar: {
        height: width * 0.17,
        width: width * 0.17,
        borderRadius: width,
        backgroundColor: 'red'
    },
    card: {
        height: height * .3,
        width: width * 0.4,
        backgroundColor: '#00000010',
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        height: height * .2,
        width: width * 0.4,
    },
    info: {
        height: height * .1,
        width: width * 0.4,
        padding: 10,
    },
    star: {
        height: 20,
        width: 20,
        marginTop: 5
    },
    rating: {
        flexDirection: 'row'
    },
    headerList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        alignSelf: 'center'
    },
    textHeaderList: {
        fontSize: 16,
        fontWeight: 'bold',
        width: width * .6
    },
    box: {
        height: height * .1,
        width: height * .1,
        marginVertical: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        alignContent: 'center',
    },
    containerMenu: {
        width: width * .9,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    },
    imageMenu: {
        height: width * .2,
        width: width * .2
    },
    textMenu: {
        color: '#33565B',
        marginTop: 20,
        fontWeight: 'bold'
    }
})