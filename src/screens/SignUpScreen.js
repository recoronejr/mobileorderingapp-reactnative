import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseApp } from '../api/firebase'
import MainScreen from './MainScreen';

import style from '../constants/Styles'


const SignUpScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');


    return (
        <View style={style.signUpContainer}>
            <View style ={style.signUpCard}>
                <Text style ={style.signUpTxt} title = "Sign Up">
                    Sign Up
                </Text>
                <View  rounded style={style.txtInput}>
                    <TextInput placeholder='First Name' defaultValue = {firstName} onChangeText={firstName => setFirstName(firstName)} />
                </View>
                <View  rounded style={style.txtInput}>
                    <TextInput placeholder='Last Name' defaultValue = {lastName} onChangeText={lastName => setlastName(lastName)}  />
                </View>
                <View  rounded style={style.txtInput}>
                    <TextInput placeholder='Username' defaultValue = {username} onChangeText={username => setUsername(username)} />
                </View>
                <View  rounded style={style.txtInput}>
                    <TextInput placeholder='Phone Number' defaultValue = {phoneNumber} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} style={style.emailInput} />
                </View>
                <View  rounded style={style.txtInput}>
                    <TextInput placeholder='Email' defaultValue = {email} onChangeText={email => setEmail(email)} style={style.emailInput} />
                </View>

                <View rounded style={style.txtInput}>
                    <TextInput placeholder='Password' defaultValue = {password} onChangeText={password => setPassword(password)}  style={style.passwordinput}  secureTextEntry= {true} />
                </View>

                <View rounded style={style.txtInput}>
                    <TextInput placeholder='Verify Password' defaultValue = {verifyPassword} onChangeText={verifyPassword => setVerifyPassword(verifyPassword)}  secureTextEntry= {true} />
                </View>

                <Button title = 'Login' rounded style={style.loginbtn}  
                onPress={() => {
                    // Sign Up
                    if (password == verifyPassword) {
                      firebaseApp.signUp(firstName,lastName,phoneNumber,email,password)
                      return (
                        <MainScreen/>
                      )
                    }
                    else {
                      console.log("Password Do Not Match");
                    }
                }}/>
                <Button title = 'Already have an account?' hasText transparent onPress={() => {
                    // Go to Sign Up Screen
                    return (
                      navigation.navigate("Login")
                    )
                    
                }}/>
                <Text style ={style.signintxt}>
                    
                </Text>
            </View>
        </View>
       
    );

}
  
    export default SignUpScreen;