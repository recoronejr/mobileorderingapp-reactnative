import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import { firebaseApp } from '../api/firebase'

import {EditButton, UpdateInfo} from '../components/ButtonComp'
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
                <EmailComp style={styles.input} placeholder={firebaseApp.email}/>
            </View> 
            <View>
                <Text>Phone Number:</Text>
                <TextInput style={styles.input} placeholder={firebaseApp.phoneNumber}/>
            </View>     
            <UpdateInfo />
            <EditButton />
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
    }
});

export default EditAccountScreen;