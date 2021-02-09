import React from 'react'
import { Button, TouchableOpacity, Text } from 'react-native'

import { firebaseApp } from 'firebase'
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