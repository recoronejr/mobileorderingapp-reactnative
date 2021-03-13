import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import { Button, Text, View, ImageBackground, Modal, Pressable} from "react-native";

import style from '../constants/Styles'
import {imgs} from '../components/UniversalComps/Images'

import {OneStarRating, TwoStarRating, ThreeStarRating, FourStarRating, FiveStarRating, AmountOfReviews} from '../components/ReviewScreenComps/Star'
import ReviewModal from '../components/ReviewScreenComps/ReviewModal'

import {mapScrn} from './MapScreen'
import Star from '../components/ReviewScreenComps/Star'
import PercentageBar from '../components/ReviewScreenComps/PercentageBar'
import Review from "../components/ReviewScreenComps/Review";
import UserInputs from "../components/UserInfoComps/UserInputs";
import { Value } from "react-native-reanimated";

export default class ReviewScreen extends React.Component {
    constructor(props){
        super(props);   
    }
    render(){
        let merchantName = this.props.route.params.merchantName;
        let img = imgs.getCustomBackground();
        return (
            <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
                <View style={style.backgroundCard}>
                    <Text style={style.reviewScreenTitle}>Customer reviews</Text>
                        <View style={style.revScreenCustomerReview}>
                            
                            <View style={style.reviewScreenSubjectContainer}>
                                <UserInputs style={style.reviewSubjectInput} placeholder={'Subject'}/>
                            </View>
                            <View style={style.reviewScreenBodyContainer}>
                            <UserInputs style={style.reviewBodyInput} placeholder={'Body'} />
                            </View>
                            <View style={style.reviewScreenReviewInfoContainer}>
                                <View style={style.userWhoLeftReviewContainer}>
                                
                                </View>
                                    <View style={style.starsGivenForReviewContainer}>
                                        {/*Get this from firebase*/}
                                    </View>
                                </View>
                            
                                <ReviewModal name={merchantName}/>

                                </View>
                            <Star />
                        </View>
                    <Text style={style.reviewScreenAmountText}>40 customer ratings</Text>
            </ImageBackground>
        );
    }
}

export const revScrn = new ReviewScreen(); 