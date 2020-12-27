import * as React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

import {auth} from 'firebase';
import AuthenticationNavigation from '../navigation/AuthenticationNavigation';

export default class AccountScreen extends React.Component {
    
    constructor(props) {
        super(props);   
    }
    goToLogin() {
        return (
            <App/>
        )
    }
    render() {
        
        const { navigation: { navigate } } = this.props;

        return (
            <View style = {styles.container}>
                <View style = {styles.mainLbl}>
                <Text>Account Settings</Text>
                </View>
                <View>
                    <Button
                    title='Sign Out'
                    onPress={() => {
                        auth()
                        .signOut()
                        .then(() => {
                            return (
                                <AuthenticationNavigation/>
                            )
                        })
                    }}
                    />
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