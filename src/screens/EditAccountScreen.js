import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { firebaseApp } from '../api/firebase'

import UpdateInfoButton, {inputHasChanged, validateEmailInput, validatePhoneNumber, validateFirstName, validateLastName} from '../components/UserInfoComps/UpdateUserInfo'
import UserInputs from '../components/UserInfoComps/UserInputs'

class EditAccount extends React.Component{
    render(){
        return firebaseApp.createUserDocumentAndStore();
    }
}

const EditAccountScreen = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNumber] = useState('');

    return (
        <View>
            <View>
                <Text>First Name</Text>
                <UserInputs style={styles.input} value={firstName} placeholder={firebaseApp.firstName} onChangeText={firstName => setFirstName(firstName)} />
                <UpdateInfoButton title="Update First Name" onPress={() => {validateFirstName(firstName)}}/>
            </View>
            <View>
                <Text>Last Name</Text>
                <UserInputs style={styles.input} defaultValue={lastName} placeholder={firebaseApp.lastName} onChangeText={lastName => setLastName(lastName)}/>
                <UpdateInfoButton title="Update Last Name" defaultValue={lastName} onPress={() => {validateLastName(lastName)}}/>
            </View>
            <View>
                <Text>Email</Text>
                <UserInputs type='email' style={styles.input} defaultValue={email} placeholder={firebaseApp.email} onChangeText={email => setEmail(email)}/>
                <UpdateInfoButton title="Update Email" defaultValue={email} onPress={() => {validateEmailInput(email)}}/>
            </View>
            <View>
                <Text>Phone Number</Text>
                <UserInputs style={styles.input} defaultValue={phoneNum} placeholder={firebaseApp.phoneNumber} onChangeText={phoneNum => setPhoneNumber(phoneNum)}/>
                <UpdateInfoButton title="Update Phone Number" value={phoneNum} onPress={() => {validatePhoneNumber(phoneNum)}}/>
            </View>
            <View>
                <Button title='Update All' onPress={()=>{
                    validateEmailInput(email)
                    validatePhoneNumber(phoneNum)
                    validateFirstName(firstName)
                    validateLastName(lastName)
                }}/>
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
    }
});

export default EditAccountScreen;