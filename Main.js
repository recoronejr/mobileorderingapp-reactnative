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
        // Get All Locations Here!
        // return fetch("http://localhost:8000/getAllMerchantOauth")
        // .then(response => response.json())
        // .then( (responseJson) => {
        //     this.setState({
        //         isLoading: false,
        //         dataSource: responseJson.merchants,
        //     })
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
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
                // Will return null until datasource is properly saved to state
                // let merchants = this.state.dataSource.map((val,key) => {
                //     return 
                //         <View key = {key}> 
                //             <Text>{val.merchant_id}</Text>
                //             <Text>{val.access_token}</Text>
                //         </View>
                // });
            return (
                <MapScreen />
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
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },

});
