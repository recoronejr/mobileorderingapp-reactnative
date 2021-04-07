import React from 'react';
import { View, ImageBackground, Text} from 'react-native';

import GetUserInfo from '../components/UserInfoComps/UserInfo'
import { SignOutButton, EditButton } from '../components/UniversalComps/ButtonComp';

import {imgs} from '../components/UniversalComps/Images'

import style from '../constants/Styles'
import { firebaseApp } from '../api/firebase';
import { firebaseConfig } from '../api/config';
export default class AccountScreen extends React.Component {
    render() {
        
        //SECURITY - Check to make sure the user is signed in before showing them the screen

        if(firebaseApp.getUser()){
            console.log('Success')
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
        }else{
            alert('Something went wrong, please try again later')
            return <AuthenticationNavigation />
        }
    }
}