
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './controller/user-management/Login';
import MainScreen from './Main';
import FirebaseController from './controller/user-management/Firebase_Helper';

const Stack = createStackNavigator();

const App = ({navigation}) => {
let initialRoute = 'Main';
const firebaseController = new FirebaseController()
const user = firebaseController.getUser()
console.log(firebaseController.getUser())

return (
      <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName={initialRoute}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
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
