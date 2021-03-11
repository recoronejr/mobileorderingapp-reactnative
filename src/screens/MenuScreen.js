import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Image, Dimensions, SafeAreaView, Modal, Pressable, Alert, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import GlobalLineItem from '../model/LineItem';
import {imgs} from '../components/UniversalComps/Images'
import style from '../constants/Styles'
import Order from '../model/Order';

const {height} = Dimensions.get('window');

export default class MenuScreen extends React.Component {
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    constructor(props) {
        super(props)
        this.state = {
            menu: this.props.route.params.menu,
            menuItems: [],
            menuImages: [],
            modalVisible: false,
            variations: [],
            variation: []
        }
    }
    componentWillMount() {
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
            this.setState({variations: variations})
        }
    }
    renderOrderItem = ({ item }) => (
        <OrderItem title={item.name} />
      );
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
    OrderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.quatity} x {item.size} {item.name} @ { item.price}</Text>
        </View>
    );
    convertToDollars(num){
        let dollars = num / 100;
        dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
        return dollars;
    }

    render() {
        const { navigation: { navigate } } = this.props;
        const { modalVisible } = this.state;
        const scrollEnabled = true;

        let merchantName = this.props.route.params.merchant.name;
        let menuItems = this.state.menuItems.map((val,key) => {
            
            let image = this.getImageById(val.image_id)
            let variation = this.getVariationsById(val.id);

            return (
                <TouchableOpacity style={styles.item} onPress={() => {
                    GlobalLineItem.setName(val.item_data.name);
                    this.props.navigation.navigate("ItemVariationScreen", {variation}); 
                }}>
                    <View key={key} style={styles.card}>
                            <Text style={{fontSize:28}}>{val.item_data.name}</Text>
                            <Image style={styles.img} source={{uri:image}}/>
                            <Text style={styles.desc}>{val.item_data.description}</Text>
                    </View> 
                </TouchableOpacity>
            ) 
        });
        let img = imgs.getCustomBackground();
        let total = Order.getTotalInNumber();
        console.log(order);
        return (
            <ImageBackground source={img} style={style.imgBackground}>
            <SafeAreaView style={style.backgroundContainer}>
                <View style={style.merchantTextWrapper}>
                    <Text style={style.merchantNameText}>{merchantName}</Text>
                </View>
                <ScrollView style={style.menuScreenScroll} contentContainerStyle={style.menuScreenScrollView} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                    {menuItems}    
                </ScrollView> 
                <View style={style.menuScreenFooter}>
                    <Text style={style.menuOrderTotalTxt}>Order Total: {this.convertToDollars(total)}</Text>
                    <TouchableOpacity style={style.menuOrderBtn} onPress={() => { 
                        this.setModalVisible(true);  
                    }}>
                        <Text style={style.menuOrderBtnText}>Place Order</Text>
                    </TouchableOpacity>
                </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Confirm your order</Text>
                                <FlatList
                                data={Order.lineItems}
                                renderItem={OrderItem}
                                keyExtractor={item => item.id}
                                />
                                <Button title= "Pay"></Button>
                                <Button title= "Cancel" onPress={() => this.setModalVisible(!modalVisible)}></Button>
                             
                            </View>
                        </View>
                    </Modal>  
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
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width: 300,
        height: 500,
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
