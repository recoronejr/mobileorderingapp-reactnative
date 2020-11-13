import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet, Button} from 'react-native';

export default class OrderMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: null,
            id: null
        }
    }
    componentDidMount() {
        this.getMenus()
    }
    async getMenus() {
        let resp = await fetch("https://us-central1-squareoauth-99eb5.cloudfunctions.net/app/getMerchantsMenus")
        let respJson = await resp.json()
        let id = this.props.route.params.merchant.id
        this.setState({menu: respJson[id].items});
    }
    render() {
        const { navigation: { navigate } } = this.props;
        return (
            <View>
                <Text style={{fontSize:40}}>{this.props.route.params.merchant.name}</Text>
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
