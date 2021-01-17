import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

const PasswordComp = () =>{
    const [password, setPassword] = useState('');
    return(
        <View rounded style={styles.passwordcontainer}>
            <TextInput placeholder='Password' defaultValue = {password} onChangeText={password => setPassword(password)}  style={styles.passwordinput}  secureTextEntry= {true} />
        </View>
    )
}

const styles = StyleSheet.create({
    passwordinput: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    passwordcontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        marginTop: 20,
    }
});

export default PasswordComp;