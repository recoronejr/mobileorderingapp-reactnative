import React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation'

import AuthenticationNavigation from '../navigation/AuthenticationNavigation';
import GetUserInfo from '../components/UserInfo'
import { SignOutButton } from '../components/ButtonComp';

export default class AccountScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        <NavigationEvents onDidFocus={() => alert('Welcome')}/>
        const { navigation: { navigate } } = this.props;
        return (
            <View style = {styles.container}>
                <View style = {styles.mainLbl}>
                <Text>Account Settings</Text>
                <GetUserInfo />
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