import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

import GetUserInfo from '../components/UserInfoComps/UserInfo'
import { SignOutButton, EditButton } from '../components/UniversalComps/ButtonComp';

import {imgs} from '../components/UniversalComps/Images'

import style from '../constants/Styles'
export default class AccountScreen extends React.Component {
    render() {
        let img = imgs.getCustomBackground();
        return (
            <ImageBackground blurRadius={ Platform.OS == 'ios' ? 10 : 5 } source={img} style={style.imgBackground}>
            <View style = {style.backgroundContainer}>
                <View style = {style.backgroundCard}>
                    <View style = {style.backgroundCardOutline}>
                        <Text style={style.accountHeader} text='account details'>Account Details</Text>
                        <GetUserInfo />
                        <View style={style.accountScreenBtns}>
                            <EditButton />
                            <SignOutButton />
                        </View>
                    </View>
                </View>
            </View>
            </ImageBackground>
        );
    }
}