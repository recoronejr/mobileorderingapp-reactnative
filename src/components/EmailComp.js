import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

const EmailComp = () =>{
    const [email, setEmail] = useState('');
    return(
        <View  rounded style={styles.usernamecontainer}>
            <TextInput placeholder='Email' defaultValue = {email} onChangeText={email => setEmail(email)} style={styles.emailInput} />
        </View>
    )
}

const styles = StyleSheet.create({
    emailInput: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    usernamecontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20
    } 
});

export default EmailComp