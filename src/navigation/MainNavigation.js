import React from 'react';
import {View, Image} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import OrderScreen from '../screens/OrderScreen';
import MapScreen from '../screens/Mapscreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import style from '../constants/Styles';
import { faHome, faUser, faUtensils, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const MainNavigation = ({navigation}) => {

    return (
        <NavigationContainer>
            <Tab.Navigator headerMode="none" 
            initialRouteName="Home"
            screenOptions={{
            }}>
                <Tab.Screen name="Home" component={MainScreen} options={{
                    tabBarIcon:()=>(
                        <FontAwesomeIcon style={style.navIcon} icon={faHome}/>
                    )
                }}/>
                <Tab.Screen name="OrderMenu" component={OrderScreen} options={{
                    tabBarIcon:()=>(
                        <FontAwesomeIcon style={style.navIcon} icon={faUtensils}/>
                    )
                }}/>
                <Tab.Screen name="Account" component={AccountScreen} options={{
                    tabBarIcon:()=>(
                        <FontAwesomeIcon style={style.navIcon} icon={faUser}/>
                    )
                }}/>
                <Tab.Screen name="MapScreen" component={MapScreen} options={{
                    tabBarIcon:()=>(
                        <FontAwesomeIcon style={style.navIcon} icon={faMapMarkedAlt}/>
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer> 
    );
}

export default MainNavigation;