import React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

import GetUserInfo from '../components/UserInfoComps/UserInfo'
import { SignOutButton, EditButton } from '../components/UniversalComps/ButtonComp';

import style from '../constants/Styles'
export default class AccountScreen extends React.Component {
    render() {
        return (
            <View style = {style.container}>
                <View style = {style.mainLbl}>
                <Text>Account Settings</Text>
                    <GetUserInfo />
                    <EditButton />
                </View>
                <View>
                    <SignOutButton />
                </View>
            </View>
        );
    }
}