import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Alert, View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Image, Dimensions, SafeAreaView, Modal, Pressable, ImageBackground, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import OrderModel from '../model/Order';
import LineItemModel from '../model/LineItem';
import {imgs} from '../components/UniversalComps/Images'
import style from '../constants/Styles'

import {ReviewsButton} from '../components/UniversalComps/ButtonComp'
import AddOrderModal from '../components/OrderModals/AddOrderModal';
import ConfirmOrderModal from '../components/OrderModals/ConfirmOrderModal';

const {height} = Dimensions.get('window')

export default class MenuScreen extends React.Component {
    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };
    setOrderModalVisible = (visible) => {
        this.setState({ orderModalVisible: visible });
    }
    setVariation = (variation) => {
        this.setState({ variation: variation});
    }
    setItemName = (name) => {
        this.setState({ itemName: name});
    }
    setItemModalVisible = (visible) => {
        this.setState({ itemModalVisible: visible });
    }
    constructor(props) {
        super(props)
        this.state = {
            menu: this.props.route.params.menu,
            menuItems: [],
            menuImages: [],
            orderModalVisible: false,
            itemModalVisible: false,
            itemName:'',
            variations: [],
            variation: [],
            model: new OrderModel(),
            lineItem: new LineItemModel(),
            quantity: 0,
        }
    }
    componentWillMount() {
        this.setState({menu: this.props.route.params.menu})
        const { model } = this.state;

    }
    Item = ({size, price, item_id}) => {
        const { lineItem,quantity } = this.state;

        return (
            <View style={styles.item}>
                <Text style={styles.title}>{size}</Text>
                <Text style={styles.price}>{this.convertToDollars(price)}</Text>
                <TextInput
                    style={{height: 40,width:150,marginLeft: 10, position:"relative"}}
                    placeholder="How many?"
                    keyboardType="number-pad"
                    onChangeText={text => this.setState({quantity:text})}
                />
                <Button title="Add to Order" onPress = {() => {
                    this.createTwoButtonAlert(this.state.itemName,size,price,item_id,this.state.quantity);
                }}/>
            </View>  
        );
    }
    OrderItem = ({size, price, quantity}) => {
        const { model } = this.state;
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{quantity} x {size} at {this.convertToDollars(price)}/piece</Text>
            </View>  
        );
    }
    getImageById(id){
        for (var i = 0; i < this.state.menuImages.length; i++) {
            if (id == this.state.menuImages[i].id) {
                return this.state.menuImages[i].image_data.url
            }
        }
    }
    getVariationsById(id){
        const variation = Array();
        for (var i = 0; i < this.state.variations.length; i++) {
            if (id == this.state.variations[i].item_variation_data.item_id) {
                // variation.push(this.state.variations[i]);
                variation.push(this.state.variations[i]);
            }
        }
        return variation;
    } 
       componentDidMount() {
        let items = [];
        let images = [];
        let { variations } = this.state;

        for (var i = 0; i < this.state.menu.length; i++) {
            if (this.state.menu[i].type == "ITEM") {
                items.push(this.state.menu[i]);
                this.state.menu[i].item_data.variations.forEach(e => {
                    if (e.type == "ITEM_VARIATION") {
                        variations.push(e);
                    }
                });

            }
            else if (this.state.menu[i].type == "IMAGE") {
                images.push(this.state.menu[i])
            }
            this.setState({menuItems: items});
            this.setState({menuImages: images});
            this.setState({variations: variations});
        }
    }
    renderItem = ({ item }) => {
        let merchant = {
            id: item.merchant_id,
            name: item.name,
        }
        model.location_id = merchant.id;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate("MenuScreen", {merchant})
                }}>
            </TouchableOpacity>
                
        ) 
    }
    convertToDollars(num){
        let dollars = num / 100;
        dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
        return dollars;
    }
    createTwoButtonAlert = (name,size,price, item_id, quantity) => {
        const { model} = this.state;
        const { lineItem } = this.state;

        return (

            Alert.alert(
                "Comfirmation",
                "Add Items to Order?",
                [
                {
                text: "Cancel",
                onPress: () => {
                    this.setItemModalVisible(!this.state.itemModalVisible); 
                    },
                },
                { text: "Yes", onPress: () =>  {
                    model.addItem(name,size, price, item_id, quantity), 
                    this.setItemModalVisible(!this.state.itemModalVisible)
                    }
                }
                ],
                { cancelable: false }
            )   
        )  
    }
    render() {
        const scrollEnabled = true;
        const { orderModalVisible, itemModalVisible, order, model } = this.state;
        let merchantName = this.props.route.params.merchant.name;
        let merchantId = this.props.route.params.merchant.id;
        model.location_id = merchantId;
        const renderItemVar = ({ item }) => (
            <this.Item size={item.item_variation_data.name} price={item.item_variation_data.price_money.amount} item_id={item.item_variation_data.item_id}/>
        );
        const renderOrder = ({ item }) => (
            <this.OrderItem size={item.name} price={item.base_price_money.amount} quantity={item.quantity}/>
        );

        let menuItems = this.state.menuItems.map((val,key) => {
            
            let image = this.getImageById(val.image_id);
            let variations = this.getVariationsById(val.id);
            let itemName = val.item_data.name;
            return (
                <TouchableOpacity style={styles.item} onPress={() => {
                    this.setVariation(variations);
                    this.setItemName(itemName);
                    this.setItemModalVisible(true);
                }}>
                    <View key={key} style={styles.card}>
                        <Text style={{fontSize:28}}>{itemName}</Text>
                        <Image style={styles.img} source={{uri:image}}/>
                        <Text style={styles.desc}>{val.item_data.description}</Text>
                    </View> 
                </TouchableOpacity>
            ) 
        });
        let img = imgs.getCustomBackground();

        return (
            <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
                <SafeAreaView style={style.backgroundContainer}>
                    <View style={style.merchantTextWrapper}>
                        <Text style={style.merchantNameText}>{merchantName}</Text>
                        
                        <TouchableOpacity>
                            <Button title="Reviews" hasText transparent onPress={()=>{
                            this.props.navigation.navigate('Reviews', {merchantName})}}/> 
                        </TouchableOpacity>
                    
                    </View>
                    <ScrollView style={style.menuScreenScroll} contentContainerStyle={style.menuScreenScrollView} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                            
                        {menuItems}    
                        
                    </ScrollView> 
                    <View style={style.menuScreenFooter}>
                        <Text style={style.menuOrderTotalTxt}>Order Total: {model.getTotalInDollars()}</Text>
                        <TouchableOpacity style={style.menuOrderBtn} onPress={() => {
                            this.setOrderModalVisible(true);
                        }}>
                            <Text style={style.menuOrderBtnText}>Place Order</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/*Select Size / Add To Order*/}
                    <AddOrderModal />
                    
                    {/*Modal to confirm order*/}
                    <ConfirmOrderModal />

                </SafeAreaView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    card: {
        backgroundColor: '#ffffff',
        width: '80%',
        height: 240,
        alignSelf: "center",
        flexGrow: 1,
        marginBottom: 10,
        padding: 10,
    },
    item:{
        alignSelf:'stretch'
    },
    desc: {
        marginTop: 10,
    },
    scrollview: {
        flexGrow:1,
    },
    scroll: {
        flex:1,
    },
    img: {
        alignSelf: 'center',
        width: '100%',
        height: 100
    },
    orderBtn: {
        height:50,
        backgroundColor: 'lightgray',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 22
      },
      modalView: {
        width: '75%',
        height: '50%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
