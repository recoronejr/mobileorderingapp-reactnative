import React, {useState} from 'react'
import style from '../../constants/Styles';

import {View, Modal, Text, Pressable} from 'react-native'

import UserInputs from './UserInputs';
import { firebaseApp } from '../../api/firebase';

const PaymentInfoModal = () =>{
    
    const [modalVisible, setModalVisible] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    return (
        <View style={style.userInfoModalContainer}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible);}}>
            
            <View style={style.modalCenteredView}>
                <View style={style.userInfoModalCenteredView}>
                    <View style={style.userInfoModalExitBtnContainer}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.userInfoModalExitBtnTxt}>X</Text>
                        </Pressable>
                    </View>

                    <View style={style.userInfoModalInputContainer}>
                        <Text style={style.userInfoInputsHeaderTxt}>Update Payment Info</Text>
                        <UserInputs style={style.userInfoModalInput} placeholder={'Card Number'} onChangeText={cardNumber => setCardNumber(cardNumber)}/>

                        <UserInputs style={style.userInfoModalInput} placeholder={'Expiration'} onChangeText={expiration => setExpiration(expiration)}/>

                        <UserInputs style={style.userInfoModalInput} placeholder={'Security Code'} onChangeText={securityCode => setSecurityCode(securityCode)}/>
                    </View>

                    <View style={style.userInfoUpdateModalBtnContainer}>
                        <Pressable style={style.userInfoModalUpdateBtn} onPress={() => {firebaseApp.updatePaymentInfo(cardNumber, expiration, securityCode); setModalVisible(!modalVisible)}}>
                            <Text style={style.userInfoModalUpdateBtnTxt}>Update Payment Info</Text>
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
    if(firebaseApp.checkForPaymentInfo() === false){
        return <Text style={style.modalAddBtnTxt}>Add Payment Info</Text>
    }else{
        return <Text style={style.modalAddBtnTxt}>Edit Payment Info</Text>
    }
}

export default PaymentInfoModal