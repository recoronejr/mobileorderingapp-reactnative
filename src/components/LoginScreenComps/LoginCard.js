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

const LoginCard = ({ navigation }) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let img = imgs.getCustomCardImage();
    
        return(
            <View style={style.backgroundCard}>
                <BurgerIcon />
                <Text style ={style.loginHeader}>Sign In</Text>

                <View style={style.sideBySideContainer}>
                    <TextInput style={style.loginUsernameText} editable={false} value={'Email: '}/>
                    <View style={style.loginWrapper}>
                        <UserInputs onChangeText={email => setEmail(email)} style={style.loginUsernameInput}/>
                    </View>
                </View>

                <View style={style.sideBySideContainer}>
                    <TextInput style={style.loginPasswordText} value={'Password: '}/>
                    <View style={style.loginWrapper}>
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