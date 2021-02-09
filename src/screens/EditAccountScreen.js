import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { firebaseApp } from '../api/firebase'

import UpdateUserInfo, {UpdateUsersInfo} from '../components/UserInfoComps/UpdateUserInfo'
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
                <UpdateUserInfo title="Update First Name" onPress={() => firebaseApp.updateFirstName(firstName)}/>
            </View>
            <View>
                <Text>Last Name</Text>
                <UserInputs style={styles.input} defaultValue={lastName} placeholder={firebaseApp.lastName} onChangeText={lastName => setLastName(lastName)}/>
                <UpdateUserInfo title="Update Last Name" defaultValue={lastName} onPress={() => firebaseApp.updateLastName(lastName)}/>
            </View>
            <View>
                <Text>Email</Text>
                <UserInputs style={styles.input} defaultValue={email} placeholder={firebaseApp.email} onChangeText={email => setEmail(email)}/>
                <UpdateUserInfo title="Update Email" defaultValue={email} onPress={() => firebaseApp.updateEmail(email)}/>
            </View>
            <View>
                <Text>Phone Number</Text>
                <UserInputs style={styles.input} defaultValue={phoneNum} placeholder={firebaseApp.phoneNumber} onChangeText={phoneNum => setPhoneNumber(phoneNum)}/>
                <UpdateUserInfo title="Update Phone Number" value={phoneNum} onPress={() => firebaseApp.updatePhoneNumber(phoneNum)}/>
            </View>
            <View>
                <Button title='Update All' onPress={()=>{
                    alert('Test');
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