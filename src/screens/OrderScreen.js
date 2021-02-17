import * as React from 'react';
import { Navigator, ImageBackground, View, Button, Text, StyleSheet, TextInput, Image } from 'react-native';

import {imgs} from '../components/UniversalComps/Images'

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
        let img = imgs.getCustomBackground();

        return (
            <ImageBackground source={img} style={style.imgBackground}>
            <View style = {style.backgroundContainer}>
                <View style = {style.backgroundCard}>
                    <Text>You have no active orders</Text>
                </View>
                
            </View>
            </ImageBackground>
        );
    }
}