import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

import AuthenticationNavigation from '../../navigation/AuthenticationNavigation';
import { useNavigation } from '@react-navigation/native';

import {auth} from 'firebase';
import style from '../../constants/Styles'

export default class LoginButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={style.loginbtn} onPress={this.props.onPress}>
                <Text>Login</Text>
            </TouchableOpacity>
        )
    }
}

export const SignUpButton = () =>{
    const navigation = useNavigation();
        return <TouchableOpacity style={style.signUpBtn}>
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
