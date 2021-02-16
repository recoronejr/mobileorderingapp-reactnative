import React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

import GetUserInfo from '../components/UserInfoComps/UserInfo'
import HeaderComp from '../components/UniversalComps/HeaderComp'
import { SignOutButton, EditButton } from '../components/UniversalComps/ButtonComp';

import style from '../constants/Styles'
export default class AccountScreen extends React.Component {
    render() {
        return (
            <View style = {style. accountScreenContainer}>
                <View style = {style.backgroundCard}>
                <Text style={style.accountHeader} text='account details'>Account Details</Text>
                    <GetUserInfo />
                    <View style={style.accountScreenBtns}>
                        <EditButton />
                        <SignOutButton />
                    </View>
                </View>
            </View>
        );
    }
}