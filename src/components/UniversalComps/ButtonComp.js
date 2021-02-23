import React from 'react';
import {Button, TouchableOpacity, Text} from 'react-native';

import AuthenticationNavigation, {ReviewStackNav} from '../../navigation/AuthenticationNavigation';
import { useNavigation } from '@react-navigation/native';
import {validateEmailInput, validatePhoneNumber, validateFirstName, validateLastName} from '../UserInfoComps/UpdateUserInfo'

import {auth} from 'firebase';
import style from '../../constants/Styles'

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
    return <TouchableOpacity style={style.signOutBtn} onPress={() => {
        auth()
        .signOut()
        .then(() => {
            return (<AuthenticationNavigation/>)
        })}}> 
        <Text style={style.signOutBtnTxt}>Sign Out</Text>
    </TouchableOpacity>
} 

export const EditButton = () =>{
    const navigation = useNavigation();
    return(
    <TouchableOpacity style={style.editBtn} onPress={()=>
        navigation.navigate("EditAccount")}>
        <Text style={style.editBtnTxt}>Edit Account</Text>
    </TouchableOpacity>
    )
}

export const ReviewScreenButton = () =>{
    const navigation = useNavigation();
    return(
    <TouchableOpacity style={style.reviewScrnBtn} onPress={()=>
        navigation.navigate("Review")}>
        <Text style={style.reviewScrnBtnTxt}>Reviews</Text>
    </TouchableOpacity>
    )
}

export const ExistingUserButton = () =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={style.signInBtn} onPress={() => { 
            return (navigation.navigate("Login"))}}>
            <Text style={style.signInBtnTxt}>Have an Account?</Text>
        </TouchableOpacity>
    )
}

export const UpdateAllInfoBtn = (input) =>{
    return(
            <TouchableOpacity style={style.updateAllBtn} onPress={()=>{
                validateEmailInput(input)
                validatePhoneNumber(input)
                validateFirstName(input)
                validateLastName(input)}}>
                <Text style={style.updateAllText}>Update All</Text>
            </TouchableOpacity>
    )
}

export const CancelButton = () =>{

}
