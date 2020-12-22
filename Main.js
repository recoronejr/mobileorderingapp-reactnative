import * as React from 'react';
import { SafeAreaView } from 'react-navigation'
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image, Dimensions, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirebaseController from './controller/user-management/Firebase_Helper'
import MapScreen from './src/screens/Mapscreen';
import OrderMenu from './src/screens/OrderMenu';
import Location from "./src/screens/Mapscreen"
const Stack = createStackNavigator();
export default class MainScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            dataSource: null,
        }
    }
    componentDidMount() {
      
    }
    
    render() {
        const { navigation: { navigate } } = this.props;
        if  (this.state.isLoading) {
            return (
                <View style = {styles.container}>
                  <ActivityIndicator />  
                </View>
                
            );
        } 
        else {
            return (
                <Stack.Navigator initialRouteName = "MapScreen" style={styles.navigator}>
                    <Stack.Screen
                    name="MapScreen"
                    component={MapScreen}
                    />
                    <Stack.Screen name="Locations" component={Location} />
                    <Stack.Screen name="OrderMenu" component={OrderMenu} />
                </Stack.Navigator>
                
            );  
        }
        
    }
}

const styles = StyleSheet.create({
    navigator:{
        backgroundColor: '#000000',
    },
    container: {
        flex: 1,
    },
    welcometxt: {
        marginTop: 50,
    },
   

});
