import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet, Button,  Modal, Alert, TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map'
import OrderMenu from './MenuScreen'

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: null,
            menu: null,
        }
    }
    componentDidMount() {
        this.getLocations();
    }
    async getLocations() {
        while(this.state.locations == [] || this.state.locations == null) {
            let resp = await fetch("https://us-central1-squareoauth-99eb5.cloudfunctions.net/app/getMerchantsLocations")
            let respJson = await resp.json()
            this.setState({locations: respJson});
        }
        while(this.state.menu == [] || this.state.menu == null) {
            let resp = await fetch("https://us-central1-squareoauth-99eb5.cloudfunctions.net/app/getMerchantsMenus")
            let respJson = await resp.json()
            this.setState({menu: respJson});
        }
    }
    renderItem = ({ item }) => {
        let merchant = {
            id: item.merchant_id,
            name: item.name,
            
        }
        
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate("MenuScreen", {
                        merchant:merchant,
                        menu: this.state.menu[merchant.id].items
                    })
                }}>
                <Location title={item.name} address={item.address.address_line_1} merchantId={item.id}/>  
            </TouchableOpacity>     
        ) 
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            //Will return null until datasource is properly saved to state
            <SafeAreaView>
                <Map />
                <Text style={{fontSize:40}}>Locations</Text>
                <FlatList data={this.state.locations}
                renderItem={this.renderItem}
                />
                
            </SafeAreaView>
        ) 
    }   
}
    const Location = ({title, address}) => {
        const [modalVisible, setModalVisible] = useState(false);
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                <Text> From {address} </Text>
            </View> 
        )
    }
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
