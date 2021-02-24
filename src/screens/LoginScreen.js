import React from 'react';
import  { View, ImageBackground, StyleSheet, Button } from 'react-native';

import LoginCard from '../components/LoginScreenComps/LoginCard'
import {imgs} from '../components/UniversalComps/Images'

import style from '../constants/Styles'
const LoginScreen = () => {
    let img = imgs.getCustomBackground();
    return (
        <View style={style.customBackgroundImage}>
            <ImageBackground blurRadius={ Platform.OS == 'ios' ? 10 : 5 } source={img} style={style.imgBackground}>
                <LoginCard />
            </ImageBackground>
        </View>   
    );
}

export default LoginScreen