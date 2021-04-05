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
        return <TouchableOpacity style={style.signUpBtn} onPress={()=>{
            if (password === verifyPassword) {
                firebaseApp.signUp(firstName,lastName, phoneNumber, email,password)
                return(<MainScreen/>)
            }
        }}>
            <Text style={style.signUpBtnTxt} >Sign Up</Text>
        </TouchableOpacity>
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
            navigation.navigate("EditAccount")}/>
    </TouchableOpacity>
    )
}

export const AddAddressButton = () =>{
    const navigation = useNavigation();
    return(
    <TouchableOpacity style={style.addressBtn}>
        <Button title="Add Address" hasText transparent onPress={()=>
            navigation.navigate("EditAccount")}/>
    </TouchableOpacity>
    )
}

export const SetAddressBtn = () =>{
    const navigation = useNavigation();
    let status = firebaseApp.checkForAddress();
    if(status === false){
        return <Button title="Add Your Address" onPress={() => navigation.navigate('EditAccount')}/>
    }else{
        return <Text>Address Exists</Text>
    }
}

export const SetPaymentBtn = () =>{
    const navigation = useNavigation();
    let status = firebaseApp.checkForPaymentInfo();
    if(status === false){
        return <Button title="Add Payment Info" onPress={() => navigation.navigate('EditAccount')}/>
    }else{
        return <Text>Payment Info Exists</Text>
    }
}