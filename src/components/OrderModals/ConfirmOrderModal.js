import React from 'react'
import {Modal, View, Text, FlatList, Button} from 'react-native'

const ConfirmOrderModal = () =>{
   return  (
    <Modal animationType="slide" transparent={true} visible={orderModalVisible} onRequestClose={() => {
        Alert.alert("Modal has been closed.")
        this.setOrderModalVisible(!orderModalVisible)
    }}>
        <View style={styles.modalCenteredView}>
            <View style={styles.modalView}>
                <Text>Confirm your order</Text>
                <FlatList data={model.lineItems} renderItem={renderOrder} keyExtractor={item => item.item_id}/>
                <Text style={styles.title}>Total: {model.getTotalInDollars()}</Text>
                <Button title="Pay" />
                <Button title="Cancel" onPress={() => this.setOrderModalVisible(!orderModalVisible)} />
            </View>
        </View>
    </Modal>
   )
}

export default ConfirmOrderModal