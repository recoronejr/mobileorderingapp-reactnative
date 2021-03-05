import React from 'react';
import {View, Image} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';
import AccountScreen from '../screens/AccountScreen';
import OrderScreen from '../screens/OrderScreen';
import MenuScreen from '../screens/Mapscreen';

import style from '../constants/Styles'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faHome, faUtensils, faUser, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();

const MainNavigation = ({navigation}) => {

    return (
        <NavigationContainer>
            <Tab.Navigator headerMode="none" initialRouteName="Main" screenOptions={{ }}>
                <Tab.Screen name="Home" component={MainScreen} style={style.mainScreenNav} options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon style={style.navIcon} icon={faHome} />
                      ),}}/>
                <Tab.Screen name="Orders" component={OrderScreen} style={style.orderScreenNav} options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon style={style.navIcon} icon={faUtensils} />
                      ),}}/>
                <Tab.Screen name="Account" component={AccountScreen} style={style.accountScreenNav} options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon style={style.navIcon} icon={faUser} />
                      ),}}/>
                <Tab.Screen name="Map" component={MenuScreen} style={style.menuScreenNav} options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon style={style.navIcon} icon={faMapMarkedAlt} />
                      ),}}/>
            </Tab.Navigator>
        </NavigationContainer> 
    );
}

export default MainNavigation;