import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'


export default class PasswordComp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <View style={styles.passwordcontainer}>
            <TextInput placeholder={this.props.placeholder} onChangeText={this.props.onChangeText}  style={styles.passwordinput}  secureTextEntry= {true} />
        </View>
        )   
    }
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