import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import { firebaseApp } from '../api/firebase'

firebaseApp.createUserDocumentAndStore();
export default class GetUserInfo extends React.Component{
    render(){
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

