import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

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
            <View style={style.loginCard}>
            <HeaderComp />
            <View style={style.usernamecontainer}>
                <UserInputs placeholder="Email" onChangeText={email => setEmail(email)} style={style.emailInput} />
            </View>
            <View style={style.passwordcontainer}>
                <PasswordComp placeholder="Password" onChangeText={(password) => setPassword(password)} style={style.passwordinput} />
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