import React from 'react'
import { View, StyleSheet, Button, Navigator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HeaderComp from './HeaderComp'
import EmailComp from './EmailComp'
import PasswordComp from './PasswordComp'
import { LoginButton, SignUpButton } from './Button'


const LoginCard = ({ navigation }) =>{
    return(
        <View style={styles.card}>
            <HeaderComp />
            <EmailComp />
            <PasswordComp />
            <LoginButton />
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
    }
});

export default LoginCard