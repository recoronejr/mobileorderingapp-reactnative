import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';
import AccountScreen from '../screens/AccountScreen';
import OrderScreen from '../screens/OrderScreen';

const Tab = createBottomTabNavigator();

export const MainNavigation = ({navigation}) => {

    return (
        <NavigationContainer>
            <Tab.Navigator headerMode="none" 
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
