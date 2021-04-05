import firebase from 'firebase'
import React, {Component, useEffect} from 'react'
import {View, Text, TextInput} from 'react-native'
import { firebaseApp } from '../../api/firebase'

import style from '../../constants/Styles'
export default class GetUserInfo extends React.Component{
    render(){
        return(
            <View style={style.accountInfoCard}>
                <Text style={style.accountInfoContainer}><Text style={style.accountInfoLabel}>Name: </Text><Text style={style.accountInfo}>{firebaseApp.firstName}{' '}{firebaseApp.lastName}</Text></Text>
                <UserEmail />
                <UserPhone />
                <UserAddress />
            </View>
        );
    }
}

//return any User info we may need throughout the app
export const UserFName = () =>{
    return <Text style={style.accountInfoContainer}><Text style={style.accountInfoLabel}>First Name: </Text><Text style={style.accountInfo}>{firebaseApp.firstName}</Text></Text>
}
export const UserLName = () =>{
    return <Text style={style.accountInfoContainer}><Text style={style.accountInfoLabel}>Last Name: </Text><Text style={style.accountInfo}>{firebaseApp.lastName}</Text></Text>
}
export const UserEmail = () =>{
    return <Text style={style.accountInfoContainer}><Text style={style.accountInfoLabel}>Email: </Text><Text style={style.accountInfo}>{firebaseApp.email}</Text></Text>
}
export const UserPhone = () =>{
    return <Text style={style.accountInfoContainer}><Text style={style.accountInfoLabel}>Phone: </Text><Text style={style.accountInfo}>{firebaseApp.phoneNumber}</Text></Text>
}
export const UserAddress = () =>{
    if(firebaseApp.checkForAddress() === true){
        return <Text style={style.accountInfoContainer}><Text style={style.accountInfoLabel}>Address: </Text><Text style={style.accountInfo}>{firebaseApp.address}</Text></Text>
    }else{
        return <Text style={style.accountInfoContainer}><Text style={style.accountInfoLabel}>Address: </Text><Text style={style.accountInfo}>None on file</Text></Text>
    }
}

//Return inputs for each field