import React, {Component, useEffect} from 'react'
import {View, Text, TextInput} from 'react-native'
import { firebaseApp } from '../../api/firebase'

export default class GetUserInfo extends React.Component{
    render(){
        firebaseApp.createUserDocumentAndStore();
        return(
            <View>
                <UserName />
                <UserEmail />
                <UserPhone />
            </View>
        );
    }
}

//return any User info we may need throughout the app
export const UserName = () =>{
    return <Text>Name: {firebaseApp.firstName}{' '}{firebaseApp.lastName}</Text>
}
export const UserFName = () =>{
    return <Text>First Name: {firebaseApp.firstName}</Text>
}
export const UserLName = () =>{
    return <Text>Last Name: {firebaseApp.lastName}</Text>
}
export const UserEmail = () =>{
    return <Text>Email: {firebaseApp.email}</Text>
}
export const UserPhone = () =>{
    return <Text>Phone: {firebaseApp.phoneNumber}</Text>
}

//Return inputs for each field