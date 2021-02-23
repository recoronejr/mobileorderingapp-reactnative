import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation'

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import ReviewScreen from '../screens/ReviewScreen'

const Stack = createStackNavigator();

const AuthenticationNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export const ReviewStackNav = () =>{
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Review" component={ReviewScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default AuthenticationNavigation;