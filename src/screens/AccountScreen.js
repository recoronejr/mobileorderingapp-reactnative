import * as React from 'react';
import App from '../../App';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import * as firebase from 'firebase';
export default class AccountScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
           
        }; 
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
                    onPress={() =>  
                        firebase.auth().signOut().then(function() {
                            // Sign-out successful Send To App.js.
                        }).catch(function(error) {
                            // An error happened.
                        })
                       
                    }
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