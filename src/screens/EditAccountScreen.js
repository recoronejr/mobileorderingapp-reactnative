import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { firebaseApp } from '../api/firebase'

import UpdateInfoButton, {inputHasChanged, validateEmailInput, validatePhoneNumber, validateFirstName, validateLastName} from '../components/UserInfoComps/UpdateUserInfo'
import UserInputs from '../components/UserInfoComps/UserInputs'

import style from '../constants/Styles'

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
        <View style={style.backgroundCard}>
            <View>
                <Text style={style.editScrnHeader}>Edit Account Details: </Text>
            </View>
            <View>
                <Text style={style.editText}>First Name</Text>
                <View style={style.editHoriz}>
                    <UserInputs style={style.input} value={firstName} placeholder={firebaseApp.firstName} onChangeText={firstName => setFirstName(firstName)} />
                    <UpdateInfoButton title="Update" onPress={() => {validateFirstName(firstName)}}/>
                </View>
            </View>

            <View>
                <Text style={style.editText}>Last Name</Text>
                <View style={style.editHoriz}>
                    <UserInputs style={style.input} defaultValue={lastName} placeholder={firebaseApp.lastName} onChangeText={lastName => setLastName(lastName)}/>
                    <UpdateInfoButton title="Update" defaultValue={lastName} onPress={() => {validateLastName(lastName)}}/>
                </View>
            </View>

            <View>
                <Text style={style.editText}>Email</Text>
                <View style={style.editHoriz}>
                    <UserInputs type='email' style={style.input} defaultValue={email} placeholder={firebaseApp.email} onChangeText={email => setEmail(email)}/>
                    <UpdateInfoButton title="Update" defaultValue={email} onPress={() => {validateEmailInput(email)}}/>
                </View>
            </View>

            <View>
                <Text style={style.editText}>Phone Number</Text>
                <View style={style.editHoriz}>    
                    <UserInputs style={style.input} defaultValue={phoneNum} placeholder={firebaseApp.phoneNumber} onChangeText={phoneNum => setPhoneNumber(phoneNum)}/>
                    <UpdateInfoButton title="Update" value={phoneNum} onPress={() => {validatePhoneNumber(phoneNum)}}/>
                </View>
            </View>

            <View>
                <TouchableOpacity style={style.updateAllBtn} onPress={()=>{
                    validateEmailInput(email)
                    validatePhoneNumber(phoneNum)
                    validateFirstName(firstName)
                    validateLastName(lastName)
                }}>
                <Text style={style.updateAllText}>Update All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditAccountScreen;