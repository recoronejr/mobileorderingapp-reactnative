import React from 'react';
import {View, Image} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';
import AccountScreen from '../screens/AccountScreen';
import OrderScreen from '../screens/OrderScreen';
import MenuScreen from '../screens/Mapscreen';
import ReviewScreen from '../screens/ReviewScreen'

const Tab = createBottomTabNavigator();

const MainNavigation = ({navigation}) => {

    return (
        <NavigationContainer>
            <Tab.Navigator headerMode="none" 
            initialRouteName="Main"
            screenOptions={{
            }}>
                <Tab.Screen name="Main" component={MainScreen} />
                <Tab.Screen name="OrderMenu" component={OrderScreen} />
                <Tab.Screen name="Account" component={AccountScreen} />
                <Tab.Screen name="MenuScreen" component={MenuScreen} />
                <Tab.Screen name="Reviews" component={ReviewScreen} />
            </Tab.Navigator>
        </NavigationContainer> 
    );
}

export default MainNavigation;