import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, ImageBackground, Image } from 'react-native'

import { auth } from 'firebase'
import style from '../../constants/Styles'

import {imgs} from '../UniversalComps/Images'
import {BurgerIcon} from '../UniversalComps/Icons'

import PasswordComp from '../UserInfoComps/PasswordComp'
import LoginButton, { SignUpButton } from '../UniversalComps/ButtonComp'

import MainNavigation from '../../navigation/MainNavigation'
import UserInputs from '../UserInfoComps/UserInputs'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
const LoginCard = ({ navigation }) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let img = imgs.getCustomCardImage();
    
        return(
            <View style={style.backgroundCard}>
                <BurgerIcon />
                <Text style ={style.loginHeader}>Sign In</Text>
                <View style={style.loginUsernameContainer}>
                    <View style={style.sideBySideContainer}>
                        <View style={style.userIconCntainer}>
                            <FontAwesomeIcon icon={faUser} size={32} style={style.userIcon} />
                        </View>
                        <View style={style.userInputContainer}>
                            <UserInputs placeholder={"Email"} onChangeText={email => setEmail(email)} style={style.loginUsernameInput}/>
                        </View>
                    </View>
                </View>

                <View style={style.loginPwdContainer}>
                    <View style={style.sideBySideContainer}>
                        <View style={style.pwdIconCntainer}>
                            <FontAwesomeIcon icon={faUserLock} size={42} style={style.pwdIcon}/>
                        </View>
                        <View style={style.pwdInputContainer}>
                            <PasswordComp placeholder={"Password"} onChangeText={(password) => setPassword(password)} style={style.loginPasswordInput} />
                        </View>
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