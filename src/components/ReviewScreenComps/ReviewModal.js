import React, {useEffect, useRef, useState} from 'react'
import {View, Modal, Pressable, Text, Button} from 'react-native'

import style from '../../constants/Styles'
import UserInputs from '../UserInfoComps/UserInputs'
import Review from '../ReviewScreenComps/Review'

import {revScrn} from '../../screens/ReviewScreen'

import {AirbnbRating, Rating} from 'react-native-ratings'

import {firebaseApp} from '../../api/firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { sub } from 'react-native-reanimated'

const ReviewModal = (props) =>{

    const [modalVisible, setModalVisible] = useState(false);
    //Email collected from firebase
    //Timestamp collected from react-native
    const [subject, setSubject] = useState();
    const [body, setBody] = useState();
    const [rating, setRating] = useState();
    const [merchantName, setMerchantName] = useState();

    useEffect(()=>{
        setMerchantName(props.name)
    })

    return <View style={style.reviewModalCenteredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);}}>

                <View style={style.reviewModalCenteredView}>
                    <View style={style.reviewModalView}>
                        
                        <View style={style.reviewModalExitBtnContainer}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={style.reviewModalExitBtn}>X</Text>
                            </Pressable>
                        </View>
                        <Text style={style.reviewModalHeader}>Leave a Review</Text>

                        <UserInputs style={style.reviewModalSubjectInput} placeholder={'Subject'} onChangeText={subject => setSubject(subject)}/>
                        <Review onChangeText={body => setBody(body)}/>
                        
                        <View style={style.reviewModalCustomerRatingContainer}>
                            <AirbnbRating showRating imageSize={30} startingValue={0} onFinishRating={(rating => (setRating(rating)))}/>
                        </View>
                        <Pressable style={style.reviewModalSubmitButton} onPress={() => {
                            if(subject != null && body != null && rating != null){
                                firebaseApp.createNewReview(merchantName, subject, body, rating);
                                setModalVisible(!modalVisible)
                            }else{
                                alert('please fill out each section')
                            }}}>
                            <Text style={style.reviewModalBtnText}>Submit Review</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable style={style.reviewModalOpenButton} onPress={() => setModalVisible(true)}>
                <Text style={style.reviewModalBtnText}>Leave Review</Text>
            </Pressable>
        </View>
}

export default ReviewModal