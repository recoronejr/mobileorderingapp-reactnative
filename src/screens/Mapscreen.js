import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, ImageBackground, StyleSheet, Button,  Modal, Alert, TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/MapScreenComps/Map'
import OrderMenu from './MenuScreen'
import {imgs} from '../components/UniversalComps/BackgroundImages'

import style from '../constants/Styles'
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
        let img = imgs.getCustomBackground();
        return (
            //Will return null until datasource is properly saved to state
            <ImageBackground source={img} style={style.imgBackground}>
                <SafeAreaView style={style.backgroundContainer}>
                    <Map />
                    <Text style={style.mapScreenLocationHeader}>Locations</Text>
                    <FlatList data={this.state.locations} renderItem={this.renderItem} style={style.locationDataBackground}/>
                </SafeAreaView>
            </ImageBackground>
        ) 
    }   
}
    const Location = ({title, address}) => {
        const [modalVisible, setModalVisible] = useState(false);
        return (
            <View style={style.mapScreenLocationContainer}>
                <Text style={style.title}>{title}</Text>
                <Text> From {address} </Text>
            </View> 
        )
    }
