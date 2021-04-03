import React from 'react'
import {Modal, View, Text, FlatList, Button} from 'react-native'

const AddOrderModal = () =>{
   return  (
    <Modal animationType="slide" transparent={true} visible={itemModalVisible} onRequestClose={() => {this.setItemModalVisible(!orderModalVisible)}}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>Choose your size</Text>
                <FlatList data={this.state.variation} renderItem={renderItemVar} keyExtractor={item => item.id}/>         
                <Button title="Cancel" onPress={() => this.setOrderModalVisible(!orderModalVisible)}></Button>
            </View>
        </View>
    </Modal>
   )
}

export default AddOrderModal