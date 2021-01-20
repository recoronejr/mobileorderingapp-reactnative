import React, {useState, setState} from 'react'
import { View } from 'react-native'

import { auth } from 'firebase'

import HeaderComp from '../components/HeaderComp'
import EmailComp from '../components/EmailComp'
import PasswordComp from '../components/PasswordComp'
import LoginButton, { SignUpButton } from '../components/ButtonComp'
import MainNavigation from '../navigation/MainNavigation'

const HandleLogin = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return(
            <View>
            <HeaderComp />
            <EmailComp onChangeText={(email) => setEmail(email)} />
            <PasswordComp defaultValue={password} onChangeText={(password) => setPassword(password)} />
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

export default HandleLogin