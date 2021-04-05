import React from 'react';
import { View, ImageBackground, Text} from 'react-native';

import GetUserInfo from '../components/UserInfoComps/UserInfo'
import { SignOutButton, EditButton } from '../components/UniversalComps/ButtonComp';

import {imgs} from '../components/UniversalComps/Images'

import style from '../constants/Styles'
import { firebaseApp } from '../api/firebase';
export default class AccountScreen extends React.Component {
    render() {
        console.log(firebaseApp.firstName)
        let img = imgs.getCustomBackground();
        return (
            <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
            <View style = {style.backgroundContainer}>
                <View style = {style.backgroundCard}>
                <Text style={style.accountHeader} text='account details'>Account Details</Text>
                    <GetUserInfo />
                    <View style={style.accountScreenBtns}>
                        <EditButton />
                        <SignOutButton />
                    </View>
                </View>
            </View>
            </ImageBackground>
        );
    }
}