import * as React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

import App from '../../App';

import { firebaseApp } from '../api/firebase';

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
                        firebaseApp.signOut();
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