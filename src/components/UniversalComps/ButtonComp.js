import React from 'react';
import {Button, TouchableOpacity, Text } from 'react-native';

import AuthenticationNavigation from '../../navigation/AuthenticationNavigation';
import { useNavigation } from '@react-navigation/native';

import {auth} from 'firebase';
import style from '../../constants/Styles'
import { firebaseApp } from '../../api/firebase';
import * as firebase from 'firebase';
import MainScreen from '../../screens/MainScreen';

export default class LoginButton extends React.Component{
    render(){
        return(
            <TouchableOpacity style={style.loginbtn} email={this.props.email} password={this.props.password} onPress={() =>{
                auth()
                .signInWithEmailAndPassword(this.props.email, this.props.password)
                .catch(error => {
                    alert(error)
                })
            }}>
                <Text style={style.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
        )
    }
}

export const CreateAccountButton = ({firstName,lastName, phoneNumber, email,password,verifyPassword}) =>{
<<<<<<< HEAD
    return <TouchableOpacity style={style.signUpBtn} onPress={()=>{
        if (password === verifyPassword) {
            firebaseApp.signUp(firstName,lastName, phoneNumber, email,password)
            return(<MainScreen/>)
        }
    }}>
        <Text style={style.signUpBtnTxt} >Sign Up</Text>
    </TouchableOpacity>
=======
        return <TouchableOpacity style={style.signUpBtn} onPress={()=>{
            if (password === verifyPassword) {
                firebaseApp.signUp(firstName,lastName, phoneNumber, email,password)
                return(<MainScreen/>)
            }
        }}>
            <Text style={style.signUpBtnTxt} >Sign Up</Text>
        </TouchableOpacity>
>>>>>>> afac51b9f5c08f1d5c49b2ba6af5742b41e24fe7
}
export const SignUpButton = () =>{
    const navigation = useNavigation();
        return <TouchableOpacity style={style.signUpBtn}>
            <Text style={style.signUpBtnTxt} onPress={()=>
                navigation.navigate("SignUp")}>New User?</Text>
        </TouchableOpacity>
}

export const SignOutButton = () =>{
    const navigation = useNavigation();
    return <TouchableOpacity style={style.updateAllBtn} onPress={() => {
        auth()
        .signOut()
        .then(() => {
            return (<AuthenticationNavigation/>)
        })}}> 
        <Text style={style.updateAllText}>Sign Out</Text>
    </TouchableOpacity>
} 

export const EditButton = () =>{
    const navigation = useNavigation();
    return(
    <TouchableOpacity style={style.updateAllBtn} onPress={()=>
        navigation.navigate("EditAccount")}>
        <Text style={style.updateAllText}>Edit Account</Text>
    </TouchableOpacity>
    )
}

export const SetAddressBtn = () =>{
    const navigation = useNavigation();
    let status = firebaseApp.checkForAddress();
    if(status === false){
        return <TouchableOpacity style={style.btnContainer} onPress={() => navigation.navigate('EditAccount')}>
            <Text style={style.btnText}>Add Your Address</Text>
        </TouchableOpacity>
    }else{
        return <TouchableOpacity style={style.btnContainer} onPress={() => navigation.navigate('EditAccount')}>
            <Text style={style.btnText}>Edit Address</Text>
        </TouchableOpacity>
    }
}

export const SetPaymentBtn = () =>{
    const navigation = useNavigation();
    let status = firebaseApp.checkForPaymentInfo();
    if(status === false){
        return <TouchableOpacity style={style.btnContainer} onPress={() => navigation.navigate('EditAccount')}>
        <Text style={style.btnText}>Add Payment Info</Text>
    </TouchableOpacity>
    }else{
        return <TouchableOpacity style={style.btnContainer} onPress={() => navigation.navigate('EditAccount')}>
            <Text style={style.btnText}>Edit Payment Info</Text>
        </TouchableOpacity>
    }
}