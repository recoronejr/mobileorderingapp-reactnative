import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import { firebaseApp } from '../api/firebase'

export default class GetUserInfo extends React.Component{
    render(){
        return(
            <View>{firebaseApp.createUserDocumentAndStore()}</View>
        );
    }
}
