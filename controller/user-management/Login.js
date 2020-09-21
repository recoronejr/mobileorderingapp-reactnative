import React, { useState } from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { white } from 'color-name';
import {signIn, errorMessage} from '../user-management/Firebase_Helper';

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        
        <View style={styles.container}>
            
            <Text style ={styles.signintxt} title = "Sign In">
                Sign In
            </Text>

            <View  rounded style={styles.usernamecontainer}>
                <TextInput placeholder='Email' defaultValue = {email} onChangeText={email => setEmail(email)} style={styles.emailInput} />
            </View>

            <View rounded style={styles.passwordcontainer}>
                <TextInput placeholder='Password' defaultValue = {password} onChangeText={password=> setPassword(password)}  style={styles.passwordinput}  secureTextEntry= {true} />
             </View>

            <Button title = 'Forgot Password' hasText transparent />

            <Button title = 'Login' rounded style={styles.loginbtn}  
             onPress={() => {
                signIn(email,password)
                console.log(errorMessage);
                
                
            }}/>
            <Button title = 'Sign Up' hasText transparent style={styles.signupbtn} />
            <Text style ={styles.signintxt} >
                
            </Text>

        </View>
       
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#717AF9',
        
    },
    loginbtn: {
        alignSelf: 'center',
        width: 50,
        
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
  
export default Login;