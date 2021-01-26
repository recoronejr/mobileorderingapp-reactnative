import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

export default class EmailComp extends React.Component{
    constructor(props){
        super(props); 
    }
    render(){
        return(
            <TextInput value={this.props.value} placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} style={this.props.style}/>
        )
    }
}
