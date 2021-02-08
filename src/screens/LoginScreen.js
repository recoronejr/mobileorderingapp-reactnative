import React from 'react';
import  { View, ImageBackground, StyleSheet, Button } from 'react-native';

import LoginCard from '../components/LoginScreenComps/LoginCard'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../src/assets/burgerNfries.jpg')}  style={{width: '100%', height: '100%'}}>
                 <LoginCard />
            </ImageBackground>
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
});

export default LoginScreen