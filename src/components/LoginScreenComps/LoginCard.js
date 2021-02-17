import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { auth } from 'firebase'
import style from '../../constants/Styles'

import PasswordComp from '../UserInfoComps/PasswordComp'
import LoginButton, { SignUpButton } from '../UniversalComps/ButtonComp'

import MainNavigation from '../../navigation/MainNavigation'
import UserInputs from '../UserInfoComps/UserInputs'

const LoginCard = ({ navigation }) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return(
            <View style={style.backgroundCard}>
            <Text style ={style.loginHeader}>Sign In</Text>

            <View style={style.sideBySideContainer}>
                <Text style={style.loginUsernameText}>Email: </Text>
                <View>
                    <UserInputs onChangeText={email => setEmail(email)} style={style.loginUsernameInput}/>
                </View>
            </View>

            <View style={style.sideBySideContainer}>
                <Text style={style.loginPasswordText}>Password: </Text>
                <View style={style.loginPasswordWrap}>
                    <PasswordComp onChangeText={(password) => setPassword(password)} style={style.loginPasswordInput} />
                </View>
            </View>

            <View style={style.loginScreenBtns}>
                <LoginButton onPress={() => {    
                    auth()
                    .signInWithEmailAndPassword(email,password)
                    .then(() => {
                        // Go to MainScreen
                        <MainNavigation />    
                    })
                    .catch(error => {
                        alert(error)
                    })
                }}/>
                <SignUpButton />
            </View>
        </View>   
    )
}




export default LoginCard;