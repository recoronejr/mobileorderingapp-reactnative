import React, { useState } from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirebaseController from './Firebase_Helper'
import { color } from 'react-native-reanimated';
import * as firebase from 'firebase';
import App from '../../App';



const SignUpScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const firebaseController = new FirebaseController()

    return (
        <View style={styles.container}>
            <View style ={styles.card}>
                <Text style ={styles.signintxt} title = "Sign Up">
                    Sign Up
                </Text>
                <View  rounded style={styles.usernamecontainer}>
                    <TextInput placeholder='First Name' defaultValue = {firstName} onChangeText={firstName => setFirstName(firstName)} />
                </View>
                <View  rounded style={styles.usernamecontainer}>
                    <TextInput placeholder='Last Name' defaultValue = {lastName} onChangeText={lastName => setlastName(lastName)}  />
                </View>
                <View  rounded style={styles.usernamecontainer}>
                    <TextInput placeholder='Username' defaultValue = {username} onChangeText={username => setUsername(username)} />
                </View>
                <View  rounded style={styles.usernamecontainer}>
                    <TextInput placeholder='Phone Number' defaultValue = {phoneNumber} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} style={styles.emailInput} />
                </View>
                <View  rounded style={styles.usernamecontainer}>
                    <TextInput placeholder='Email' defaultValue = {email} onChangeText={email => setEmail(email)} style={styles.emailInput} />
                </View>

                <View rounded style={styles.passwordcontainer}>
                    <TextInput placeholder='Password' defaultValue = {password} onChangeText={password => setPassword(password)}  style={styles.passwordinput}  secureTextEntry= {true} />
                </View>

                <View rounded >
                    <TextInput placeholder='Verify Password' defaultValue = {verifyPassword} onChangeText={verifyPassword => setVerifyPassword(verifyPassword)}  secureTextEntry= {true} />
                </View>

                

                <Button title = 'Login' rounded style={styles.loginbtn}  
                onPress={() => {
                    // Sign Up
                    if (password == verifyPassword) {
                      console.log({email})
                      firebaseController.signUp(firstName,lastName,phoneNumber,email,password)
                      return (
                        <App />
                      )
                    }
                    else {
                      console.log("Password Do Not Match")
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
        backgroundColor: 'rgb(153, 178, 221)'
    },
    card: {
        marginTop: 75,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '40%',
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
    emailInput: {


    },
    passwordinput: {

        
    },
    passwordcontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        marginTop: 20,
        
        
    },
    usernamecontainer: {
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