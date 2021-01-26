import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import { firebaseApp } from '../api/firebase'

import {EditButton, UpdateInfo} from '../components/ButtonComp'
import EmailComp from '../components/EmailComp'
import UserInputs from '../components/UserInputs'

const EditAccountScreen = () =>{
    return (
        <View>
            <View>
                <Text>First Name</Text>
                <UserInputs style={styles.input} placeholder={firebaseApp.firstName} />
            </View>
            <View>
                <Text>Last Name</Text>
                <UserInputs style={styles.input} placeholder={firebaseApp.lastName} />
            </View>
            <View>
                <Text>Email</Text>
                <UserInputs style={styles.input} placeholder={firebaseApp.email} />
            </View>
                <Text>Phone</Text>
                <UserInputs style={styles.input} placeholder={firebaseApp.phoneNumber} />
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