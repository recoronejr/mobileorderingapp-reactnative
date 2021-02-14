import * as React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

import style from '../constants/Styles'
export default class OrderScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
           
        }; 
    }
    componentDidMount() {
    
    }
    
    render() {
        
        const { navigation: { navigate } } = this.props;

        return (
            <View style = {style.container}>
                <View style = {style.mainLbl}>
                <Text>You have no active orders</Text>
                </View>
                
            </View>
        );
    }
}