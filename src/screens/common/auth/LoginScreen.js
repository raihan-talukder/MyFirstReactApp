import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions  } from 'react-native';
import FastImage from 'react-native-fast-image';
const { width, height } = Dimensions.get('window');

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                 <Image style={styles.logo} source={require('../../../assets/images/aiub.png')}/>
                </View>
                <Image style={styles.textLogo} source={require('../../../assets/images/aiub-text.png')}/>
                <Text>fsdfsdfsdf</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logoContainer: {
        backgroundColor: 'skyblue',
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: "bold"
      },
    logo: {
        backgroundColor: 'white',
        resizeMode: "contain"
    },
    textLogo: {
        /* height */
        resizeMode: "contain"
    },
});