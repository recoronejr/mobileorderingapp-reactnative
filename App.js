
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './controller/user-management/Login';
import SignUpScreen from './controller/user-management/SignUp';
import MainScreen from './Main';
import AccountScreen from './Account';
import OrderScreen from './Order';
import * as firebase from 'firebase';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-dom';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = ({navigation}) => {
  // var user = firebase.auth().currentUser;
  const [isSignedIn, setSignedIn] = useState();

  firebase.auth().onAuthStateChanged(function(user) {
    console.log(user)
    if (user) {
      // User is signed in.
      setSignedIn(true);
    } else {
      // No user is signed in.
      setSignedIn(false);
    }
  });
  
  return ( isSignedIn ? 
  
    <NavigationContainer>
      <Tab.Navigator headerMode="none" initialRouteName="Main">
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
  signOutButton: {
    
  },
});
