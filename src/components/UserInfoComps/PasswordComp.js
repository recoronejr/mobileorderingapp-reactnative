import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'


export default class PasswordComp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TextInput placeholder={this.props.placeholder} onChangeText={this.props.onChangeText}  style={this.props.style}  secureTextEntry= {true} placeholderTextColor = "black"/>
        )   
    }
}