import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import { firebaseApp } from '../api/firebase'

import EmailComp from '../components/EmailComp'
import PasswordComp from '../components/PasswordComp'
import {UserFName, UserLName, UserEmail, UserPhone } from '../components/UserInfo'

const EditAccountScreen = () =>{
    return (
        <View>
            <View>
                <Text>First Name:</Text>
                <TextInput style={styles.input} placeholder={firebaseApp.firstName}/>
            </View>
            <View>
                <Text>Last Name:</Text>
                <TextInput style={styles.input} placeholder={firebaseApp.lastName}/>
            </View> 
            <View>
                <Text>Email:</Text>
                <EmailComp placeholder={firebaseApp.email}/>
            </View> 
            <View>
                <Text>Phone Number:</Text>
                <TextInput style={styles.input} placeholder={firebaseApp.phoneNumber}/>
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    usernamecontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20
    } 
});

export default EditAccountScreen;