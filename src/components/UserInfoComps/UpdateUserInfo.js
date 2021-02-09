import React from 'react'
import { Button, TouchableOpacity, Text } from 'react-native'

import { firebaseApp } from 'firebase'
import EditAccountScreen from '../../screens/EditAccountScreen';

export default class UpdateUserInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Button title={this.props.title} defaultValue={this.props.defaultValue} onPress={this.props.onPress}/>
        )
    }
}