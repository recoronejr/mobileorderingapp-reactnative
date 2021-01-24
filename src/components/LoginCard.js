import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { auth } from 'firebase'

import HeaderComp from '../components/HeaderComp'
import EmailComp from '../components/EmailComp'
import PasswordComp from '../components/PasswordComp'
import LoginButton, { SignUpButton } from '../components/ButtonComp'

import MainNavigation from '../navigation/MainNavigation'

const LoginCard = ({ navigation }) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return(
            <View style={styles.card}>
            <HeaderComp />
            <View style={styles.usernamecontainer}>
                <EmailComp placeholder="Email" onChangeText={(email) => setEmail(email)} style={styles.emailInput} />
            </View>
            <PasswordComp placeholder="Password" onChangeText={(password) => setPassword(password)} />
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
    )
}

const styles = StyleSheet.create({
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
    usernamecontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20
    }, 
    emailInput: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
    }
});

export default LoginCard