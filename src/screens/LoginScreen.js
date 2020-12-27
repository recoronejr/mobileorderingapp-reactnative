import React, { useState } from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image, ImageBackground, ColorPropType, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {firebaseApp} from '../api/firebase';
import {auth} from 'firebase';

import SignUpScreen from './SignUpScreen';
import MainScreen from './MainScreen';
import App from '../../App';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../src/assets/burgerNfries.jpg')}  style={{width: '100%', height: '100%'}}>
                <Text style ={styles.title}> </Text>
                <View style ={styles.card}>
                    <Text style ={styles.signintxt} title = "Sign In">
                        Sign In
                    </Text>
                    <View  rounded style={styles.usernamecontainer}>
                        <TextInput placeholder='Email' defaultValue = {email} onChangeText={email => setEmail(email)} style={styles.emailInput} />
                    </View>
                    <View rounded style={styles.passwordcontainer}>
                        <TextInput placeholder='Password' defaultValue = {password} onChangeText={password => setPassword(password)}  style={styles.passwordinput}  secureTextEntry= {true} />
                    </View>
                    <Button title = 'Login' rounded style={styles.loginbtn}  
                        onPress={() => {
                        
                        auth()
                            .signInWithEmailAndPassword(email,password)
                            .then(() => {
                                // Go to MainScreen
                                
                            })
                            .catch(error => {
                                // Sign in does not work 
                            })
                    }}/>
                    <Button title = 'Dont have an Account?' hasText transparent style={styles.signupbtn}  onPress={() => {
                        return (
                            navigation.navigate("SignUp")
                            )  
                    }}/>
                    <Text style ={styles.signintxt}></Text>
                </View>
            </ImageBackground>
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title:{
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
        color: '#ffffff',
        marginTop: 100
    },
    card: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        height: '50%',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 8,
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginbtn: {
        alignSelf: 'center',
        width: 50,
        marginTop: 20,
        
    },
    signupbtn: {
        alignSelf: 'center',
       
    },
    signintxt: {
        paddingTop: 50,
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center'
    },
    emailInput: {
        height: 30,
        width: '100%',
        borderColor: 'gray', 
        borderWidth: 2

    },
    passwordinput: {
        height: 30,
        width: '100%',
        borderColor: 'gray', 
        borderWidth: 2
        
    },
    passwordcontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        marginTop: 20,
        
        
    },
    usernamecontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }

    });
  
    export default LoginScreen;