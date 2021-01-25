import React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

import GetUserInfo from '../components/UserInfo'
import { SignOutButton, EditButton } from '../components/ButtonComp';

export default class AccountScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.mainLbl}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainLbl: {
        marginTop: 50,
    }

});