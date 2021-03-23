import React, {useEffect} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';


const Stack = createStackNavigator();

const AuthenticationNavigation = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthenticationNavigation;