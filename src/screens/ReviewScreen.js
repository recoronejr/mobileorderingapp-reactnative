import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import { FlatList, Text, View, ImageBackground, Modal, Pressable, Button, TouchableWithoutFeedbackBase} from "react-native";

import style from '../constants/Styles'
import {imgs} from '../components/UniversalComps/Images'

import {star} from '../components/ReviewScreenComps/Star'
import ReviewModal from '../components/ReviewScreenComps/ReviewModal'
import Star from '../components/ReviewScreenComps/Star'

import {firebaseApp} from '../api/firebase'
import { ScrollView } from "react-native-gesture-handler";
import { setStatusBarStyle } from "expo-status-bar";

export default class ReviewScreen extends React.Component {
    constructor(props){
        super(props);  
        this.state={
            review: []
        }
    }
    async componentDidMount(){
        this.setState({review: await firebaseApp.GetUserWhoLeftReview(this.props.route.params.merchantName)})
    }

    showReviews = () =>{
        return this.state.review.map(function(ref, i){
            return <View key={i} style={style.reviewContainer}>
                        <View style={style.sideBySideContainer}>
                            <View style={style.reviewUserInfo}>
                                <Text style={style.reviewInfoText}>{ref.email}</Text>
                                <Text style={style.reviewInfoText}>{ref.time}</Text>
                                <Text style={style.reviewRating}>{star.GetCustomerRating(ref.rating)}</Text>
                            </View>
                            <View style={style.reviewScreenReviewInfo}>
                                <Text style={style.reviewInfoText}>{ref.subject}</Text>
                                <Text style={style.reviewInfoText}>{ref.body}</Text>
                            </View>
                        </View>
                </View>
        })
    }

    render(){
        let merchantName = this.props.route.params.merchantName;
        let img = imgs.getCustomBackground()

        return (
            <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
                <View style={style.backgroundCard}>
                    <Text style={style.reviewScreenTitle}>Reviews for {merchantName}</Text>
                        
                        <ScrollView style={style.reviewScreenScroll}>
                            {this.showReviews()}
                        </ScrollView>

                    <ReviewModal name={merchantName}/>
                    <Star />
                </View>
            </ImageBackground>
        );
    }
}

export const revScrn = new ReviewScreen(); 