import React, { useState } from 'react'
import { View, ImageBackground, Text, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { firebaseApp } from '../api/firebase'
import {imgs} from '../components/UniversalComps/Images'

import UpdateInfoButton, {validateEmailInput, validatePhoneNumber, validateFirstName, validateLastName} from '../components/UserInfoComps/UpdateUserInfo'
import {UpdateAllInfoBtn} from '../components/UniversalComps/ButtonComp'
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
    
    let img = imgs.getCustomBackground();
    
    return (
        <ImageBackground blurRadius={ Platform.OS == 'ios' ? 10 : 5 } source={img} style={style.imgBackground}>
        <View style={style.backgroundContainer}>
        <View style={style.backgroundCard}>
            <View style={style.backgroundCardOutline}>
            <View style={style.editScrnHeaderContainer}>
                <Text style={style.editScrnHeader}>Edit Account Details: </Text>
            </View>
            <View style={style.editAccountScrnInputContainers}>
                <Text style={style.editText}>First Name</Text>
                <View style={style.sideBySideContainer}>
                    <UserInputs style={style.userInput} value={firstName} placeholder={firebaseApp.firstName} placeholderTextColor="white" onChangeText={firstName => setFirstName(firstName)} />
                    <UpdateInfoButton title="Update" onPress={() => {validateFirstName(firstName)}}/>
                </View>
            </View>

            <View style={style.editAccountScrnInputContainers}>
                <Text style={style.editText}>Last Name</Text>
                <View style={style.sideBySideContainer}>
                    <UserInputs style={style.userInput} defaultValue={lastName} placeholder={firebaseApp.lastName} placeholderTextColor="white" onChangeText={lastName => setLastName(lastName)}/>
                    <UpdateInfoButton title="Update" defaultValue={lastName} onPress={() => {validateLastName(lastName)}}/>
                </View>
            </View>

            <View style={style.editAccountScrnInputContainers}>
                <Text style={style.editText}>Email</Text>
                <View style={style.sideBySideContainer}>
                    <UserInputs type='email' style={style.userInput} defaultValue={email} placeholder={firebaseApp.email} placeholderTextColor="white" onChangeText={email => setEmail(email)}/>
                    <UpdateInfoButton title="Update" defaultValue={email} onPress={() => {validateEmailInput(email)}}/>
                </View>
            </View>

            <View style={style.editAccountScrnInputContainers}>
                <Text style={style.editText}>Phone Number</Text>
                <View style={style.sideBySideContainer}>    
                    <UserInputs style={style.userInput} defaultValue={phoneNum} placeholder={firebaseApp.phoneNumber} placeholderTextColor="white" onChangeText={phoneNum => setPhoneNumber(phoneNum)}/>
                    <UpdateInfoButton title="Update" titleTextColor={'red'} value={phoneNum} onPress={() => {validatePhoneNumber(phoneNum)}}/>
                </View>
            </View>
                <UpdateAllInfoBtn />
            </View>
        </View>
        </View>
        </ImageBackground>
    )
}

export default EditAccountScreen;