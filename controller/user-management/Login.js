import React, { useState } from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirebaseController from './Firebase_Helper'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebaseController = new FirebaseController()
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>
            
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
                // if (firebaseController.signIn(email,password) === true) {
                //     console.log("true")
                //     navigate("Main")
                // }
                // else {
                //     console.log('false')
                // }
                firebaseController.signIn(email,password)
                const user = firebaseController.getUser()
                
                if (user === null){
                    console.log('Try Again')
                }
                else{
                    
                    navigation.navigate('Main')
                }
                
            }}/>
            {/* <Button title = 'Sign Up' hasText transparent style={styles.signupbtn} /> */}
            <Text style ={styles.signintxt} >
                
            </Text>

        </View>
       
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        
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
  
    export default LoginScreen;