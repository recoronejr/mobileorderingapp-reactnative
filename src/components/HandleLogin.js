import React, {useState, setState} from 'react'
import { View } from 'react-native'

import { firebaseApp } from '../api/firebase'

import { auth } from 'firebase'

import HeaderComp from '../components/HeaderComp'
import EmailComp from '../components/EmailComp'
import PasswordComp from '../components/PasswordComp'
import LoginButton, { SignUpButton } from '../components/ButtonComp'
import MainNavigation from '../navigation/MainNavigation'

export const HandleLogin = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return(
            <View>
            <HeaderComp />
            <EmailComp placeholder="Email" onChangeText={(email) => setEmail(email)} />
            <PasswordComp placeholder="Password" defaultValue={password} onChangeText={(password) => setPassword(password)} />
            <LoginButton onPress={() => {    
                auth()
                .signInWithEmailAndPassword(email,password)
                .then(() => {
                    // Go to MainScreen
                    <MainNavigation />
                    
                })
                .catch(error => {
                    alert('Failed to log in')
                })
            }}/>
            <SignUpButton />
        </View>   
    )
}