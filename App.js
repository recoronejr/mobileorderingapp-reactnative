
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainScreen from './src/screens/MainScreen';
import AccountScreen from './src/screens/AccountScreen';
import OrderScreen from './src/screens/OrderScreen';

import * as firebase from 'firebase';
import { FirebaseAPI } from './src/api/firebase';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const firebaseApp = new FirebaseAPI();

const App = ({navigation}) => {

  return ( firebaseApp.getUser() ? 
  
    <NavigationContainer>
      <Tab.Navigator style={styles.navigator} headerMode="none" 
      initialRouteName="Main"
      screenOptions={{
        tabBarOptions: {
            style: {
                
            },
        },
    }}>
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer> 
    : 
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
