
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

import {auth} from 'firebase';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
       <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
  }

  return (
     <NavigationContainer>
      <Tab.Navigator style={styles.navigator} headerMode="none" 
      initialRouteName="Main"
      screenOptions={{
      }}>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer> 
  ); 
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
