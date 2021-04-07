import React from 'react';
import { Alert, View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Image, Dimensions, SafeAreaView, Modal, Pressable, ImageBackground, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OrderModel from '../model/Order';
import LineItemModel from '../model/LineItem';
import {imgs} from '../components/UniversalComps/Images'
import style from '../constants/Styles'
import { setStatusBarStyle } from 'expo-status-bar';

const {height} = Dimensions.get('window')

export default class MenuScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: this.props.route.params.menu,
            menuItems: [],
            menuImages: [],
            orderModalVisible: false,
            itemModalVisible: false,
            variations: [],
            variation: [],
            model: new OrderModel(),
            lineItem: new LineItemModel(),
            quantity: 0,
            size: ''
        }
    }
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
    setItemModalVisible = (visible) => {
        this.setState({ itemModalVisible: visible });
    }
    Item = ({name, size, price, item_id}) => {
        const { lineItem,quantity } = this.state;

        return (
            <View style={style.orderContainer}>
                <View style={style.sideBySideContainer}>
                    <Text style={style.orderSizeText}>{name}</Text>
                    <Text style={style.orderPrice}>{this.convertToDollars(price)}</Text>
                    <View style={style.orderQuantityContainer}>
                        <TextInput
                            style={style.orderQuantityInput}
                            placeholder="Quantity"
                            keyboardType="number-pad"
                            onChangeText={text => this.setState({quantity:text})}
                        />
                    </View>
                </View>
                <TouchableOpacity style={style.modalAddToOrderBtn} onPress = {() => {
                    this.createTwoButtonAlert(name,this.state.size,price,item_id,this.state.quantity);
                }}>
                    <Text style={style.modalAddToOrderBtnTxt}>Add to Order</Text>
                </TouchableOpacity>
            </View>  
        );
    }
    OrderItem = ({size, price, quantity}) => {
        const { model } = this.state;
        return (
            <View style={style.orderItemContainer}>
                <Text style={style.orderItemsText}>{quantity} x {size} at {this.convertToDollars(price)} each</Text>
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
        for(var i = 0; i < this.state.menu.length; i++) {
            if(this.state.menu[i].type == "ITEM") {
                items.push(this.state.menu[i]);
                this.state.menu[i].item_data.variations.forEach(e => {
                    if(e.type == "ITEM_VARIATION") {
                        variations.push(e);
                    }
                });
            }else if(this.state.menu[i].type == "IMAGE") {
                images.push(this.state.menu[i])
            }
            this.setState({menu: this.props.route.params.menu})
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
    createTwoButtonAlert = (name,size, price, item_id, quantity) => {
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
                    model.addItem(name,size,price, item_id, quantity), 
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
            <this.Item name={item.item_variation_data.name} price={item.item_variation_data.price_money.amount} item_id={item.item_variation_data.item_id}/>
        );
        const renderOrder = ({ item }) => (
            <this.OrderItem name={item.name} size={item.name} price={item.base_price_money.amount} quantity={item.quantity}/>
        );

        let menuItems = this.state.menuItems.map((val,key) => {
            
            let image = this.getImageById(val.image_id);
            let variation = this.getVariationsById(val.id);
            return (
                <TouchableOpacity key={key} style={style.menuItem} onPress={() => {
                    this.setVariation(variation);
                    this.setItemModalVisible(!this.state.itemModalVisible);
                }}>
                    <View key={key} style={style.menuCard}>
                        <Text style={style.menuItemName}>{val.item_data.name}</Text>
                        <Image style={style.menuItemImg} source={{uri:image}}/>
                        <View style={style.menuItemDescContainer}>
                            <Text style={style.menuItemDesc}>{val.item_data.description}</Text>
                        </View>
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
                    </View>
                    <TouchableOpacity style={style.goToReviewScreenContainer} onPress={()=>{
                        this.props.navigation.navigate('Reviews', {merchantName})}}>
                        <Text style={style.goToReviewScreenText}>Reviews for {merchantName}</Text> 
                    </TouchableOpacity>
                    <ScrollView style={style.menuScreenScroll} contentContainerStyle={style.menuScreenScrollView} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                            
                        {menuItems}    
                        
                    </ScrollView> 
                    <View style={style.menuScreenFooter}>
                        <Text style={style.menuOrderTotalTxt}>Order Total: {model.getTotalInDollars()}</Text>
                        <TouchableOpacity style={style.menuOrderBtn} onPress={() => {
                            this.setOrderModalVisible(!this.state.orderModalVisible);
                        }}>
                            <Text style={style.menuOrderBtnText}>Place Order</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/*Select Size / Add To Order*/}
                    <View>
                        <Modal animationType="slide" transparent={true} visible={itemModalVisible} onRequestClose={() => {this.setItemModalVisible(!this.state.orderModalVisible)}}>
                            <View style={style.orderModalCenteredView}>
                                <View style={style.userInfoModalCenteredView}>
                                    <View style={style.userInfoModalExitBtnContainer}>
                                        <Pressable onPress={() => this.setItemModalVisible(!itemModalVisible)}>
                                            <Text style={style.userInfoModalExitBtnTxt}>X</Text>
                                        </Pressable>
                                    </View>
                                    <Text style={style.orderModalHeader}>Choose your size</Text>
                                    <FlatList data={this.state.variation} renderItem={renderItemVar} keyExtractor={item => item.id}/>         
                                    <TouchableOpacity style={style.closeModalBtn} onPress={() => this.setItemModalVisible(!itemModalVisible)}>
                                        <Text style={style.closeModalBtnTxt}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    
                    {/*Modal to confirm order*/}
                    <View style={style.userInfoModalContainer}>
                        <Modal animationType="slide" transparent={true} visible={orderModalVisible} onRequestClose={() => {
                            Alert.alert("Modal has been closed.")
                            this.setOrderModalVisible(!this.state.orderModalVisible)}}>

                            <View style={style.modalCenteredView}>
                                <View>
                                    <View style={style.userInfoModalExitBtnContainer}>
                                        <Pressable onPress={() => this.setOrderModalVisible(!orderModalVisible)}>
                                            <Text style={style.userInfoModalExitBtnTxt}>X</Text>
                                        </Pressable>
                                    </View>
                                    <Text style={style.orderModalHeader}>Confirm your order</Text>
                                    <View style={style.orderConfirmationView}>
                                        <FlatList key={1} style={style.orderConfirmationContainer} data={model.lineItems} renderItem={renderOrder} keyExtractor={item => item.item_id}/>
                                    </View>
                                    <View style={style.sideBySideContainer}>
                                        <Text style={style.orderTotalText}>Total: {model.getTotalInDollars()}</Text>
                                        <TouchableOpacity style={style.finalizeOrderBtn}>
                                            <Text style={style.finalizeOrderBtnTxt}>Finalize Order</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={style.closeModalBtn} onPress={() => this.setOrderModalVisible(!orderModalVisible)}>
                                        <Text style={style.closeModalBtnTxt}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}