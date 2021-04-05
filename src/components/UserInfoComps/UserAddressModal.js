import React, {useState} from 'react'
import style from '../../constants/Styles';

import {View, Modal, Text, Pressable} from 'react-native'

import UserInputs from './UserInputs';
import { firebaseApp } from '../../api/firebase';
const AddressModal = () =>{
    
    const [modalVisible, setModalVisible] = useState(false);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [addressState, setAddressState] = useState('');
    const [zip, setZip] = useState('');

    return (
        <View style={style.userInfoModalContainer}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible);}}>
            
            <View style={style.modalCenteredView}>
                <View style={style.userInfoModalCenteredView}>
                    <View style={style.userInfoModalExitBtnContainer}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.userInfoModalExitBtn}>X</Text>
                        </Pressable>
                    </View>

                    <View style={style.userInfoModalInputContainer}>
                        <Text style={style.userInfoInputsHeaderTxt}>Update Address Info</Text>
                        <UserInputs style={style.userInfoModalInput} placeholder={'Street'} onChangeText={street => setStreet(street)}/>

                        <UserInputs style={style.userInfoModalInput} placeholder={'City'} onChangeText={city => setCity(city)}/>

                        <UserInputs style={style.userInfoModalInput} placeholder={'State'} onChangeText={addressState => setAddressState(addressState)}/>

                        <UserInputs style={style.userInfoModalInput} placeholder={'Zip Code'} onChangeText={zip => setZip(zip)}/>
                    </View>

                    <View style={style.userInfoUpdateModalBtnContainer}>
                        <Pressable style={style.userInfoModalUpdateBtn} onPress={() => {firebaseApp.updateCustomerAddress(street, city, addressState, zip); setModalVisible(!modalVisible)}}>
                            <Text style={style.userInfoModalUpdateBtnTxt}>Update Address</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
        <Pressable style={style.modalAddBtn} onPress={() => setModalVisible(true)}>
            <ButtonText />
        </Pressable>
    </View>
    )
}

const ButtonText = () =>{
    if(firebaseApp.checkForAddress() === false){
        return <Text style={style.modalAddBtnTxt}>Add my Address</Text>
    }else{
        return <Text style={style.modalAddBtnTxt}>Edit Address</Text>
    }
}

export default AddressModal