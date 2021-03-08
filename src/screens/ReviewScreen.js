import React, {useState} from "react";
import { render } from "react-dom";
import { TextInput, Text, View, ImageBackground, Modal, Pressable} from "react-native";

import style from '../constants/Styles'
import {imgs} from '../components/UniversalComps/Images'

import {OneStarRating, TwoStarRating, ThreeStarRating, FourStarRating, FiveStarRating, AmountOfReviews} from '../components/ReviewScreenComps/Star'

import Star from '../components/ReviewScreenComps/Star'
import PercentageBar from '../components/ReviewScreenComps/PercentageBar'
import Review from "../components/ReviewScreenComps/Review";
import UserInputs from "../components/UserInfoComps/UserInputs";

export default function App() {

    let img = imgs.getCustomBackground();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
            <View style={style.backgroundCard}>
                <Text style={style.reviewScreenTitle}>Customer reviews</Text>
                    <View style={style.revScreenCustomerReview}>
                        
                        <View style={style.reviewScreenSubjectContainer}>

                        </View>
                        <View style={style.reviewScreenBodyContainer}>

                        </View>
                        <View style={style.reviewScreenReviewInfoContainer}>
                            <View style={style.userWhoLeftReviewContainer}>
                            
                            </View>
                            <View style={style.starsGivenForReviewContainer}>

                            </View>
                        </View>
                        
                        {/*This is a Modal, which is used to animate the popup between Reviews and Leaving a Review.*/}
                        <View style={style.centeredView}>
                            <Modal animationType="slide" transparent={true} visible={modalVisible}
                                onRequestClose={() => {
                                setModalVisible(!modalVisible);}}>
                                <View style={style.centeredView}>
                                <View style={style.modalView}>
                                    
                                    
                                    <Text style={style.modalText}>Leave a Review</Text>
                                    <UserInputs style={style.reviewModalSubjectInput} placeholder={'Subject'}></UserInputs>
                                    <Review />

                                    <Pressable style={[style.reviewModalButton, style.reviewModalBtnClose]} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={style.reviewModalBtn}>Submit Review</Text>
                                    </Pressable>
                                </View>
                                </View>
                            </Modal>
                            <Pressable style={[style.reviewModalButton, style.reviewModalBtnOpen]} onPress={() => setModalVisible(true)}>
                                <Text style={style.reviewModalBtn}>Leave Review</Text>
                            </Pressable>
                            </View>

                    </View>
                    <Star />
                <Text style={style.reviewScreenAmountText}>40 customer ratings</Text>
            </View>
        </ImageBackground>
    );
}