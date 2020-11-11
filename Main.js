import * as React from 'react';
import { SafeAreaView } from 'react-navigation'
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image, Dimensions, ActivityIndicator } from 'react-native';
import { signOut, firebaseUser, db, user } from './controller/user-management/Firebase_Helper'
import User from './model/User';
import FirebaseController from './controller/user-management/Firebase_Helper'
import MapScreen from './src/screens/Mapscreen';

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
            <View>
                <MapScreen />
            </View>
                
            );  
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcometxt: {
        marginTop: 50,
    },
   

});
