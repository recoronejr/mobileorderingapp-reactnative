import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, ImageBackground, StyleSheet, Button,  Modal, Alert, TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/MapScreenComps/Map'
import OrderMenu from './MenuScreen'
import {imgs} from '../components/UniversalComps/Images'
import style from '../constants/Styles'
import OrderModel from '../model/Order';

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: null,
            menu: null,
            merchantName: 'test',
            order: new OrderModel(),
        }
        Geocoder.init("AIzaSyDm3DBYsnyBoA1Gf_r74G9EHok45roCFNw");
        
    }
    componentDidMount() {
        this.getLocations();
        const { order } = this.state;
        order.clear();
    }
    getMerchantName(){
        alert(this.state.merchantName)
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
            <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("MenuScreen", {
                        merchant: merchant,
                        menu: this.state.menu[merchant.id].items,
                        order: this.state.order,
                })}}>
                <Location title={merchant.name} address={item.address.address_line_1}/>  
            </TouchableOpacity>     
        ) 
    }

    async attemptGeocodeAsync() {
        this.setState({ inProgress: true, error: null });
        try {
            let BusinessAddress = await Location.geocodeAsync(this.state.locations.map(item));
            this.setState({ BusinessAddress });
        } catch (e) {
            this.setState({ error: e.message });
        } finally {
            this.setState({ inProgress: false });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        let img = imgs.getCityImage();
        console.log(this.state);
        return (
            //Will return null until datasource is properly saved to state
            <ImageBackground style={style.mapScreenBackgroundImg} source={img} blurRadius={20}>
                <SafeAreaView>
                    <Map />
                    <Text style={style.mapScreenLocationHeader}>Locations</Text>
                    <FlatList data={this.state.locations} renderItem={this.renderItem} style={style.locationDataBackground}/>
                </SafeAreaView>
            </ImageBackground>
        ) 
    }   
}
const Location = ({title, address}) => {
    return (
        <View style={style.mapScreenLocationContainer}>
            <Text style={style.mapScreenLocatonTitle}>{title}</Text>
            <Text style={style.mapScreenLocationAddress}>{address}</Text>
        </View> 
    )
}

export const mapScrn = new MapScreen();
