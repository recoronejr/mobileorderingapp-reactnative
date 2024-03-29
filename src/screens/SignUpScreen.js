import React, { useState } from 'react';
import { View, ImageBackground, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseApp } from '../api/firebase'
import MainScreen from './MainScreen';

import {imgs} from '../components/UniversalComps/Images'

import style from '../constants/Styles'

import UserInputs from '../components/UserInfoComps/UserInputs'
import LoginButton, { CreateAccountButton } from '../components/UniversalComps/ButtonComp'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    let img = imgs.getCustomBackground();

    return (
        <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
        <View style={style.backgroundContainer}>
            <View style ={style.backgroundCard}>
            <View>
                <Text style={style.signUpScreenHeader}>Sign Up: </Text>
            </View>
                <View style={style.sideBySideContainer}>
                    <Text style={style.signUpTxt}>First Name: </Text>
                    <UserInputs style={style.txtInput} defaultValue = {firstName} onChangeText={firstName => setFirstName(firstName)} />
                </View>

                <View style={style.sideBySideContainer}>
                    <Text style={style.signUpTxt}>Last Name: </Text>
                    <UserInputs style={style.txtInput} defaultValue = {lastName} onChangeText={lastName => setlastName(lastName)}  />
                </View>
                
                <View style={style.sideBySideContainer}>
                    <Text style={style.signUpTxt}>User Name: </Text>
                    <UserInputs style={style.txtInput} defaultValue = {username} onChangeText={username => setUsername(username)} />
                </View>
                
                <View style={style.sideBySideContainer}>
                    <Text style={style.signUpTxt}>Phone Number: </Text>
                    <UserInputs style={style.txtInput} defaultValue = {phoneNumber} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} />
                </View>
                
                <View style={style.sideBySideContainer}>
                    <Text style={style.signUpTxt}>Email: </Text>
                    <UserInputs style={style.txtInput} defaultValue = {email} onChangeText={email => setEmail(email)} />
                </View>

                <View style={style.sideBySideContainer}>
                    <Text style={style.signUpTxt}>Password: </Text>
                    <UserInputs style={style.txtInput} defaultValue = {password} onChangeText={password => setPassword(password)} secureTextEntry= {true} />
                </View>

                <View style={style.sideBySideContainer}>
                    <Text style={style.signUpTxt}>Verify Password: </Text>
                    <UserInputs style={style.txtInput} defaultValue = {verifyPassword} onChangeText={verifyPassword => setVerifyPassword(verifyPassword)} secureTextEntry= {true} />
                </View>
                <View style={style.signUpButtons}>
                    <CreateAccountButton rounded style={style.loginbtn} firstName = {firstName} lastName = {lastName} phoneNumber = {phoneNumber} email = {email} password ={password} verifyPassword={verifyPassword}/>
                    <TouchableOpacity style={style.signInBtn} onPress={() => { return (navigation.navigate("Login"))}}>
                            <Text style={style.signInBtnText}>Have an Account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    );

}
  
    export default SignUpScreen;