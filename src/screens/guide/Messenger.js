import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../../components';
import { messenger } from '../../mocks/messenger';

const { width, height } = Dimensions.get('window')


function Messenger() {


    const [state, setState] = React.useState('')

    const handleTextInput = (text) => setState(text)

    const handleSubmit = () => {
        if (state.length === 0) {
            null
        }
        messenger.push({
            name: 'Me',
            text: state
        })
    }

    return (
        <View style={styles.container}>
            <Header title="Messenger" />
            <View style={styles.containerData}>
                <LinearGradient colors={['#D9D4D4', 'lightgrey']} style={styles.listData}>
                    <FlatList
                        data={messenger}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <>
                                {
                                    item.avatar ?
                                        <View style={styles.containerLeft}>
                                            <Image source={item.avatar} style={styles.avatar} />
                                            <View style={[styles.buble, styles.leftChat]}>
                                                <Text>{item.text}</Text>
                                            </View>
                                        </View>
                                        :
                                        <View style={[styles.buble, styles.rightChat]}>
                                            <Text>{item.text}</Text>
                                        </View>
                                }
                            </>
                        )}
                    />
                </LinearGradient>
                <View style={styles.containerText}>
                    <TextInput onChangeText={handleTextInput} style={styles.TextInput} />
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text>Kirim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Messenger

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerData: {
        marginTop: 120,
        marginHorizontal: 20
    },
    listData: {
        height: height * .7,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: width * .9,
        alignSelf: 'center',
    },
    buble: {
        width: width * .6,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 100,
        marginVertical: 20,
    },
    rightChat: {
        alignSelf: 'flex-end'
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftChat: {
        alignSelf: 'flex-start'
    },
    avatar: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * .9,
        marginTop: 10
    },
    TextInput: {
        padding: 20,
        width: width * .7,
        backgroundColor: '#D9D4D460',
        borderRadius: 10
    }
})
