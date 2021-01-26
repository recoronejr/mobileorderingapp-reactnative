import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

import AuthenticationNavigation from '../navigation/AuthenticationNavigation';
import { useNavigation } from '@react-navigation/native';

import {auth} from 'firebase';

export default class LoginButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={styles.loginbtn} onPress={this.props.onPress}>
                <Text>Login</Text>
            </TouchableOpacity>
        )
    }
}

export const SignUpButton = () =>{
    const navigation = useNavigation();
        return <TouchableOpacity style={styles.signUpBtn}>
            <Button title="Don't have an account" hasText transparent onPress={()=>
                navigation.navigate("SignUp")
            }/>
        </TouchableOpacity>
}

export const SignOutButton = () =>{
    return <Button title='Sign Out' onPress={() => {
        auth()
        .signOut()
        .then(() => {
            return (<AuthenticationNavigation/>)
    })}}/>
} 

export const EditButton = () =>{
    const navigation = useNavigation();
    return(
    <TouchableOpacity>
    <Button title="Edit Account" hasText transparent onPress={()=>
            navigation.navigate("EditAccount")
        } 
    />
    </TouchableOpacity>
    )
}

export const CancelButton = () =>{

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
