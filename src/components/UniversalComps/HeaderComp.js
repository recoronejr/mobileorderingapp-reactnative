import React, { Children } from 'react'
import { Text } from 'react-native'

import style from '../../constants/Styles'

export default class HeaderComp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return<Text style ={style.signintxt} titl={this.props.title}>Sign In</Text>
    }
}