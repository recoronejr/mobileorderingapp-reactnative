
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './controller/user-management/Login';
import MainScreen from './Main';
import AccountScreen from './Account';
import OrderScreen from './Order';

const Tab = createBottomTabNavigator();

const App = ({navigation}) => {
let initialRoute = 'Main';

return (
      <NavigationContainer>
          <Tab.Navigator headerMode="none" initialRouteName={initialRoute}>
            <Tab.Screen name="Main" component={MainScreen} />
            <Tab.Screen name="Orders" component={OrderScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
          </Tab.Navigator>
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
