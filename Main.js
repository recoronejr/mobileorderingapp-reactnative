import * as React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { signOut, firebaseUser, db, user } from './controller/user-management/Firebase_Helper'
import * as firebase from 'firebase';
import User from './model/User';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: null,
        }; 
        
    }
    componentDidMount() {
        const user = firebase.auth().currentUser;
        const userDocument = db.collection('Users').doc(user.uid)
            .onSnapshot(doc => {
                const userData = new User()
                userData.firstName = doc.data().firstName;
                userData.lastName = doc.data().lastName;
                userData.phoneNumber = doc.data().phoneNumber;
                userData.email = doc.data().email;
                this.setState({
                    userData
                })
            })

    }
    
    render() {
        
        const { navigation: { navigate } } = this.props;

        return (
            <View style = {styles.container}>
                <Text>Welcome {this.state.userData ? this.state.userData.firstName : null},</Text>
                <View>
                    <Button

                    title='Sign Out'
                    onPress={() =>  
                        firebase.auth()
                        .signOut()
                        .then(() => console.log('User signed out!'))
                        .then(() => navigate('Login'))
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
        alignItems: "center",
        justifyContent: 'center',
    },

});
