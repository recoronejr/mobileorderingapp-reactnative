import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

import AuthenticationNavigation from '../../navigation/AuthenticationNavigation';
import { useNavigation } from '@react-navigation/native';

import {auth} from 'firebase';
import style from '../../constants/Styles'
import { merchantInfo } from '../../screens/MenuScreen';

export default class LoginButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={style.loginbtn} onPress={this.props.onPress}>
                <Text style={style.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
        )
    }
}

export const SignUpButton = () =>{
    const navigation = useNavigation();
        return <TouchableOpacity style={style.signUpBtn}>
            <Text style={style.signUpBtnTxt} onPress={()=>
                navigation.navigate("SignUp")
            }>New User?</Text>
        </TouchableOpacity>
}

export const SignOutButton = () =>{
    return <TouchableOpacity style={style.signOutBtn} > 
        <Button title='Sign Out' onPress={() => {
            auth()
            .signOut()
            .then(() => {
                return (<AuthenticationNavigation/>)
            })}}/>
    </TouchableOpacity>
} 

export const EditButton = () =>{
    const navigation = useNavigation();
    return(
    <TouchableOpacity style={style.editBtn}>
    <Button title="Edit Account" hasText transparent onPress={()=>
            navigation.navigate("EditAccount")
        } 
    />
    </TouchableOpacity>
    )
}

export const CancelButton = () =>{

}