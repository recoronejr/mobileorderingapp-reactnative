import React from 'react'
import { Button, TouchableOpacity, Text } from 'react-native'

import { firebaseApp } from '../../api/firebase'
import EditAccountScreen from '../../screens/EditAccountScreen'; 

export default class UpdateInfoButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Button title={this.props.title} defaultValue={this.props.defaultValue} onPress={this.props.onPress}/>
        )
    }
}

export const inputHasChanged = (input) =>{
    if(input == ''){
        return false
    }else{
        return true
    }
}

export const validateEmailInput = (input) =>{
    //Credit to this fix goes to https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs/39357015
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(inputHasChanged(input)){
            if(re.test(input)){
                firebaseApp.updateEmail(input)
            }else{
                alert('Invalid Email')
            }
        }else{
            alert('No Change')
        }
}