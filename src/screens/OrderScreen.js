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
            <ImageBackground blurRadius={ Platform.OS == 'ios' ? 10 : 5 } source={img} style={style.imgBackground}>
            <View style = {style.backgroundContainer}>
                <View style = {style.backgroundCard}>
                    <View style={style.backgroundCardOutline}>
                        <Text>You have no active orders</Text>
                    </View>
                </View>
            </View>
            </ImageBackground>
        );
    }
}