import * as React from 'react';
import { SafeAreaView } from 'react-navigation'
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image, Dimensions, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import FirebaseAPI from '../api/firebase';

import MenuScreen from './MenuScreen';
import MapScreen from "./MapScreen"
import EditAccountScreen from './EditAccountScreen';
<<<<<<< HEAD
import ItemVariationScreen from './ItemVariationScreen';
=======
import ReviewScreen from './ReviewScreen'
import HomeScreen from './HomeScreen'
>>>>>>> 5d88d7e5b920bfed4fb706239f26d0b216a6bb25

import style from '../constants/Styles'

const Stack = createStackNavigator();

export default class MainScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            dataSource: null,
        }
    }
    componentDidMount() {
      
    }
    
    render() {
        const { navigation: { navigate } } = this.props;
        if  (this.state.isLoading) {
            return (
                <View style = {style.container}>
                  <ActivityIndicator />  
                </View>
                
            );
        } 
        else {
            return (
                <Stack.Navigator initialRouteName = "HomeScreen" style={style.mainScreenNavigator}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="MapScreen" component={MapScreen} />
                    <Stack.Screen name="MenuScreen" component={MenuScreen} />
                    <Stack.Screen name = "ItemVariationScreen" component = {ItemVariationScreen} />
                    <Stack.Screen name="EditAccount" component={EditAccountScreen} />
                    <Stack.Screen name="Reviews" component={ReviewScreen} />
                </Stack.Navigator>
                
            );  
        }
        
    }
}
