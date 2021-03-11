import React, {useState} from 'react'
import {View, Modal, Pressable, Text, Button} from 'react-native'

import style from '../../constants/Styles'
import UserInputs from '../UserInfoComps/UserInputs'
import Review from '../ReviewScreenComps/Review'

import {revScrn} from '../../screens/ReviewScreen'

import {Rating} from 'react-native-ratings'
import { SearchLoyaltyAccountsRequestLoyaltyAccountQuery } from 'square-connect'

const ReviewModal = () =>{

    const [modalVisible, setModalVisible] = useState(false);
    const [subject, setSubject] = useState();
    const [body, setBody] = useState();
    const [rating, setRating] = useState();

    return <View style={style.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);}}>
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        
                        <View style={style.modalExitBtn}>
                            <Pressable style={style.reviewModalBtnCloseTop} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={style.reviewModalCloseBtn}>X</Text>
                            </Pressable>
                        </View>
                        <Text style={style.modalHeader}>Leave a Review</Text>

                        <UserInputs style={style.reviewModalSubjectInput} placeholder={'Subject'} onChangeText={subject => setSubject(subject)}/>
                        <Review onChangeText={body => setBody(body)}/>
                        
                        <View style={style.reviewModalCustomerRatingContainer}>
                            <Rating showRating imageSize={30}/>
                        </View>

                        <Pressable style={[style.reviewModalButton, style.reviewModalBtnClose]} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.reviewModalBtn}>Submit Review</Text>
                        </Pressable>
                        <Button title="Temp" onPress={()=>{
                            console.log(revScrn.getMerchantName())
                        }}/>
                    </View>
                </View>
            </Modal>
            <Pressable style={[style.reviewModalButton, style.reviewModalBtnOpen]} onPress={() => setModalVisible(true)}>
                <Text style={style.reviewModalBtn}>Leave Review</Text>
            </Pressable>
        </View>
}

export default ReviewModal