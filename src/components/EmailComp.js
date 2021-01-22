import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

export default class EmailComp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <TextInput placeholder={this.props.placeholder} onChangeText={this.props.onChangeText}  style={styles.emailInput} />
            </View>
        )
    }
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