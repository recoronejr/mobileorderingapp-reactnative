import React from 'react'
import { Button, TouchableOpacity, Text } from 'react-native'

import style from '../../constants/Styles'

import { firebaseApp } from '../../api/firebase'
import EditAccountScreen from '../../screens/EditAccountScreen'; 

export default class UpdateInfoButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={style.updateInfoBtn} onPress={this.props.onPress}>
                <Text style={style.updateInfoBtnText}>Update</Text>
            </TouchableOpacity>
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

export const validatePhoneNumber = (input) => {
    let num = input.replace(".", '');
    if(inputHasChanged(input)){
        if(isNaN(num)){
            alert('Invalid Phone Number. Please remove invalid characters.')
        }else{
            firebaseApp.updatePhoneNumber(num);
        }    
    }else{
        alert('No Change')
    }
}

export const validateFirstName = (input) => {
    if(inputHasChanged(input)){
        if(!input.match(/\d/) && !input.match(/[$-/:-?{-~!"^_`\[\]]/)){
            firebaseApp.updateFirstName(input)
        }else{
            alert('First name contains invalid characters. Please remove them and try again.')
        }
    }else{
        alert('No Change')
    }
}

export const validateLastName = (input) => {
    if(inputHasChanged(input)){
        if(!input.match(/\d/) && !input.match(/[$-/:-?{-~!"^_`\[\]]/)){
            firebaseApp.updateLastName(input)
        }else{
            alert('Last name contains invalid characters. Please remove them and try again.')
        }
    }else{
        alert('No Change')
    }
}