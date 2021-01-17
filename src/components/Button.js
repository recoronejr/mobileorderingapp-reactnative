import * as React from 'react'
import { StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { auth } from 'firebase'

import MainNavigation from '../navigation/MainNavigation';

export const LoginButton = () =>{
    return(
        <TouchableOpacity style={styles.loginbtn}>
            <Button title = 'Login' rounded onPress={() => {    
                auth().signInWithEmailAndPassword(email,password).then(() => {
                // Go to MainScreen
                    <MainNavigation/>      
                })
                .catch(error => {
                // Sign in does not work 
                })
            }}/>
        </TouchableOpacity>
    )
}

export const SignUpButton = () =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.signUpBtn}>
            <Button title="Don't have an account" hasTest transparent onPress={()=>
                navigation.navigate("SignUp")
            }/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginbtn: {
        alignSelf: 'center',
        width: 60,
        marginTop: 30
    },
    signUpBtn: {
        height: 100,
        alignSelf: 'center',
        marginTop: 10, 
        marginBottom: 30
    }
});
