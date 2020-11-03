import React, { useState } from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirebaseController from './Firebase_Helper'
import { color } from 'react-native-reanimated';
import * as firebase from 'firebase';
import App from '../../App';
import SingnUp from './SignUp';
import SignUp from './SignUp';
import SignUpScreen from './SignUp';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebaseController = new FirebaseController()
    return (
        <View style={styles.container}>
            <View style ={styles.card}>
                <Text style ={styles.signintxt} title = "Sign In">
                    Sign In
                </Text>

                <View  rounded style={styles.usernamecontainer}>
                    <TextInput placeholder='Email' defaultValue = {email} onChangeText={email => setEmail(email)} style={styles.emailInput} />
                </View>

                <View rounded style={styles.passwordcontainer}>
                    <TextInput placeholder='Password' defaultValue = {password} onChangeText={password => setPassword(password)}  style={styles.passwordinput}  secureTextEntry= {true} />
                </View>

                {/* <Button title = 'Forgot Password' hasText transparent /> */}

                <Button title = 'Login' rounded style={styles.loginbtn}  
                onPress={() => {
                    firebaseController.signIn(email,password)
                    var user = firebase.auth().currentUser;
                    if (!user) {
                        <App />
                    }
                    else {
                        console.log('true')
                    }
                    
                }}/>
                <Button title = 'Sign Up' hasText transparent style={styles.signupbtn}  onPress={() => {
                    // Go to Sign Up Screen
                    return (
                      navigation.navigate("SignUp")
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
        marginTop: 150,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        height: '50%',
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
        width: '60%',

    },
    passwordinput: {
        width: '60%',
        
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
  
    export default LoginScreen;