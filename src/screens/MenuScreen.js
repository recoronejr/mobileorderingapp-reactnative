import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Image, Dimensions, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import style from '../constants/Styles'

const {height} = Dimensions.get('window')

export default class MenuScreen extends React.Component {
    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };
    constructor(props) {
        super(props)
        this.state = {
            menu: [],
            menuItems: [],
            menuImages: [],
        }
    }
    componentWillMount() {
        this.setState({menu:this.props.route.params.menu})
    }
    getImageById(id){
        for (var i = 0; i < this.state.menuImages.length; i++) {
            if (id == this.state.menuImages[i].id) {
                return this.state.menuImages[i].image_data.url
            }
        }
    }
    componentDidMount() {
        let items = [];
        let images = [];

        for (var i = 0; i < this.state.menu.length; i++) {
            if (this.state.menu[i].type == "ITEM") {
                items.push(this.state.menu[i])
            }
            else if (this.state.menu[i].type == "IMAGE") {
                images.push(this.state.menu[i])
            }
            this.setState({menuItems: items});
            this.setState({menuImages: images});
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
                    this.props.navigation.navigate("MenuScreen", {merchant})
                }}>
            </TouchableOpacity>
                
        ) 
    }
    render() {
        const { navigation: { navigate } } = this.props;
        const scrollEnabled = true;

        let merchantName = this.props.route.params.merchant.name;
        let menuItems = this.state.menuItems.map((val,key) => {
            
            let image = this.getImageById(val.image_id)
            let itemName = val.item_data.name;
            let itemDesc = val.item_data.description;

            return (
                <TouchableOpacity style={style.menuItem}>
                    <View key={key} style={style.menuCard}>
                        <Text style={style.menuItemText}>{itemName}</Text>
                        <Image style={style.menuItemImg} source={{uri:image}}/>
                        <Text style={style.menuItemDesc}>{itemDesc}</Text>
                    </View> 
                </TouchableOpacity>
            ) 
        });
        return (
            <SafeAreaView style={style.menuScreenContainer}>
                <Text style={style.merchantNameText}>{merchantName}</Text>
                <Text style={style.menuScreenText}>What would you like? </Text>
                <ScrollView style={style.menuScreenScroll} contentContainerStyle={style.menuScreenScrollView} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                    {menuItems}    
                </ScrollView> 
                <TouchableOpacity style={style.menuOrderBtn}>
                    <Text style={style.menuOrderBtnText}>Place Order Total: $0.00</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const MenuItem = () => (
    <View style={styles.item}>
        <Text style={styles.title}></Text>
        <Button title="Place Order"/>        
    </View> 
);
