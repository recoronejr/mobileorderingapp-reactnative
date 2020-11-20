import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class OrderMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: null,
            menuItems: [],
            menuImages: []
        }
    }
    componentDidMount() {
        this.getMenus()
    }
    sortData(){
        
        for (var i = 0, i) {

        }
        if (menu[i].items.type === "ITEMS") {
            this.state.menu.
        }
        else if (menu[i].items.type === "IMAGE") {
            this.setState({ myArray: [...this.state.myArray, menu[i]] })
        }
    }
    async getMenus() {
        while(this.state.locations == [] || this.state.locations == null) {
            let resp = await fetch("https://us-central1-squareoauth-99eb5.cloudfunctions.net/app/getMerchantsMenus")
            let respJson = await resp.json()
            let id = this.props.route.params.merchant.id
            this.setState({menu: respJson[id].items});
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
                    this.props.navigation.navigate("OrderMenu", {merchant})
                }}>
                {/* <Location title={item.name} address={item.address.address_line_1} merchantId={item.id}/>   */}
            </TouchableOpacity>
                
        ) 
    }
    render() {
        const { navigation: { navigate } } = this.props;
        return (
            <View>
                <Text style={{fontSize:40}}>{this.props.route.params.merchant.name}</Text>
                <FlatList data={this.state.menu}
                renderItem={this.renderItem}
                />
            </View>
        )
    }
}
const MenuItem = () => (
    <View style={styles.item}>
        <Text style={styles.title}></Text>
        <Button title="Place Order"/>
        
    </View>
);
