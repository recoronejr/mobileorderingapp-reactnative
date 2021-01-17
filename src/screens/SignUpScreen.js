import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseApp } from '../api/firebase'
import MainScreen from './MainScreen';




const SignUpScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');


    return (
        <View style={styles.container}>
            <View style ={styles.card}>
                <Text style ={styles.signintxt} title = "Sign Up">
                    Sign Up
                </Text>
                <View  rounded style={styles.txtInput}>
                    <TextInput placeholder='First Name' defaultValue = {firstName} onChangeText={firstName => setFirstName(firstName)} />
                </View>
                <View  rounded style={styles.txtInput}>
                    <TextInput placeholder='Last Name' defaultValue = {lastName} onChangeText={lastName => setlastName(lastName)}  />
                </View>
                <View  rounded style={styles.txtInput}>
                    <TextInput placeholder='Username' defaultValue = {username} onChangeText={username => setUsername(username)} />
                </View>
                <View  rounded style={styles.txtInput}>
                    <TextInput placeholder='Phone Number' defaultValue = {phoneNumber} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} style={styles.emailInput} />
                </View>
                <View  rounded style={styles.txtInput}>
                    <TextInput placeholder='Email' defaultValue = {email} onChangeText={email => setEmail(email)} style={styles.emailInput} />
                </View>

                <View rounded style={styles.txtInput}>
                    <TextInput placeholder='Password' defaultValue = {password} onChangeText={password => setPassword(password)}  style={styles.passwordinput}  secureTextEntry= {true} />
                </View>

                <View rounded style={styles.txtInput}>
                    <TextInput placeholder='Verify Password' defaultValue = {verifyPassword} onChangeText={verifyPassword => setVerifyPassword(verifyPassword)}  secureTextEntry= {true} />
                </View>

                

                <Button title = 'Login' rounded style={styles.loginbtn}  
                onPress={() => {
                    // Sign Up
                    if (password == verifyPassword) {
                      firebaseApp.signUp(firstName,lastName,phoneNumber,email,password)
                      return (
                        <MainScreen/>
                      )
                    }
                    else {
                      console.log("Password Do Not Match");
                    }
                    
                    
                }}/>
                <Button title = 'Already have an account?' hasText transparent onPress={() => {
                    // Go to Sign Up Screen
                    return (
                      navigation.navigate("Login")
                    )
                    
                }}/>
                <Text style ={styles.signintxt}>
                    
                </Text>
            </View>
        </View>
       
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'rgb(112,112,112)'
    },
    card: {
        marginTop: 150,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        height: '40%',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 8,
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginbtn: {
        alignSelf: 'center',
        width: 50,
        marginTop: 20,
        
    },
    signupbtn: {
        alignSelf: 'center',
       
    },
    signintxt: {
        paddingTop: 200,
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    },
    passwordcontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        marginTop: 20,
    },
    txtInput: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }

    });
  
    export default SignUpScreen;