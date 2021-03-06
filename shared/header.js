import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={ require('../assets/game_bg.png') } style={ styles.header }>
            <Icon name='menu' size={ 30 } style={ styles.icon } onPress={ openMenu } /> 
            <View style={ styles.content }>
                <Image source={ require('../assets/heart_logo.png') } style={ styles.headerIcon } />
                <Text style={ styles.headerText }>{ title }</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'ComicNeue-Bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerIcon: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
    content: {
        flexDirection: 'row',
    },
})