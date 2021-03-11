import React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image, FlatList, Alert } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { withOrientation } from 'react-navigation';
import GlobalLineItem from '../model/LineItem';

export default class ItemVariationScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: this.props.route.params.variation,
        }   
    }
    goBack() {
        const { navigation } = this.props;
        navigation.goBack();
    }
    convertToDollars(num){
        let dollars = num / 100;
        dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
        return dollars;
    }
    createTwoButtonAlert = () => {
        return (
            Alert.alert(
                "Comfirmation",
                "Add Items to Order?",
                [
                {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Yes", onPress: () => this.goBack() }
                ],
                { cancelable: false }
            )   
        )  
    }
    Item = ({name, price, item_id}) => {
        GlobalLineItem.setName(name);
        GlobalLineItem.setPrice(price);
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.price}>{this.convertToDollars(price)}</Text>
                <TextInput
                    style={{height: 40,width:100,marginLeft: 10, position:"relative"}}
                    placeholder="How many?"
                    keyboardType="number-pad"
                />
                <Button title="Add to Order" onPress={this.createTwoButtonAlert} />
            </View>  
        );
    } 
    render() {
        const renderItem = ({ item }) => (
            <this.Item name={item.item_variation_data.name} price={item.item_variation_data.price_money.amount} item_id={item.item_variation_data.item_ID}/>
        );
        return (
            <View style = {styles.container}>  
                <FlatList
                    data={this.state.dataSource}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />         
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    price: {
        marginLeft: 10,
        textAlignVertical: 'center',
        width: 50,
    },
    mainLbl: {
        marginTop: 50,
    },
    item: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 10
    },
    title:{
        marginLeft: 10,
        textAlignVertical: 'center',
    }

});