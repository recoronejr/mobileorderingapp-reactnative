import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet, Button} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map'

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: null,
        }
    }
    componentDidMount() {
        this.getLocations();
    }
    async getLocations() {
        let resp = await fetch("https://us-central1-squareoauth-99eb5.cloudfunctions.net/app/getMerchantsLocations")
        let respJson = await resp.json()
        this.setState({locations: respJson});
        console.warn(this.state.locations)
    }
    render() {
        return (
            //Will return null until datasource is properly saved to state
            <SafeAreaView forceInset={{top:'always'}}>
                <Map />
                <Text style={{fontSize:40}}>Locations</Text>
                <FlatList data={this.state.locations}
                renderItem={renderItem}
                />
                
            </SafeAreaView>
        ) 
    } 
    
    
}
const Item = ({ title, address }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
<Text>From {address}</Text>
        <Button title="Place Order"
        onPress={
            
        }>

        </Button>
    </View>
);
const renderItem = ({ item }) => (
    <Item title={item.name} address={item.address.address_line_1}/>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    item: {
        marginTop: 20,
        backgroundColor:'#ffffff',
        alignSelf:"center",
        width:"75%",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 8,
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
    },
    title:{

    }

});