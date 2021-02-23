import React from 'react'
import {TextInput} from 'react-native'

import style from '../../constants/Styles'

export default class UserInputs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TextInput value={this.props.value} style={this.props.style} placeholder={this.props.placeholder} placeholderTextColor={this.props.placeholderTextColor} onChangeText={this.props.onChangeText} secureTextEntry={this.props.secureTextEntry}/>
        )
    }
}