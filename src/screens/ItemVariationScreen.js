import React from 'react';
import { Navigator, View, Button, Text, StyleSheet, TextInput, Image, FlatList, Alert } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { withOrientation } from 'react-navigation';

const Item = ({name, price, item_id}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>${price * .10}</Text>
          <TextInput
            style={{height: 40,width:40,marginLeft: 10, position:"relative"}}
            placeholder="1"
            keyboardType="number-pad"
            />
          <Button title="Add to Order" onPress={createTwoButtonAlert}/>
        </View>
);
createTwoButtonAlert = () =>
    Alert.alert(
      "Comfirmation",
      "Add Items to Order",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
export default class ItemVariationScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: this.props.route.params.variation,
        }
    }
    
    
    render() {
        const renderItem = ({ item }) => (
            <Item name={item.item_variation_data.name} price={item.item_variation_data.price_money.amount} item_id={item.item_variation_data.item_ID}/>
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