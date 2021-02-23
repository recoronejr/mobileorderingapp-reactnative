import React from 'react';
import  { View, ImageBackground, StyleSheet, Button } from 'react-native';

import LoginCard from '../components/LoginScreenComps/LoginCard'
import {imgs} from '../components/UniversalComps/Images'

import style from '../constants/Styles'
const LoginScreen = () => {
    let img = imgs.getDinerImage();
    return (
        <View style={style.customBackgroundImage}>
            <ImageBackground source={img} style={style.imgBackground}>
                <LoginCard />
            </ImageBackground>
        </View>   
    );
}

export default LoginScreen