import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { auth } from 'firebase'
import style from '../../constants/Styles'

import HeaderComp from '../UniversalComps/HeaderComp'
import PasswordComp from '../UserInfoComps/PasswordComp'
import LoginButton, { SignUpButton } from '../UniversalComps/ButtonComp'

import MainNavigation from '../../navigation/MainNavigation'
import UserInputs from '../UserInfoComps/UserInputs'

const LoginCard = ({ navigation }) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return(
            <View style={style.backgroundCard}>
            <HeaderComp />

            <View style={style.loginUsernameContainer}>
                <Text style={style.loginUsernameText}>Email: </Text>
                <View style={style.usernamecontainer}>
                    <UserInputs onChangeText={email => setEmail(email)} style={style.emailInput}/>
                </View>
            </View>

            <View style={style.loginPasswordContainer}>
                <Text style={style.loginPasswordText}>Password: </Text>
                <View style={style.passwordcontainer}>
                    <PasswordComp onChangeText={(password) => setPassword(password)} style={style.passwordinput} />
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