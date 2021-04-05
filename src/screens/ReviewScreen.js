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
        this.setState({review: await firebaseApp.GetReviews(this.props.route.params.merchantName)})
    }

    showReviews = () =>{
        return this.state.review.map(function(ref, i){
            return (
            <View key={i} style={style.reviewContainer}>
                <View style={style.reviewHeader}>
                    <View style={style.reviewRatingContainer}>
                        <Text style={style.reviewRatingText}>{star.GetCustomerRating(ref.rating)}</Text>
                    </View>
                    <Text style={style.reviewDateText}>{ref.time}</Text>
                </View>
                <Text style={style.reviewSubjectText}>{ref.subject}</Text>
                <View style={style.reviewBodyContainer}>
                    <Text style={style.reviewBodyText}>{ref.body}</Text>
                </View>
                <View style={style.reviewFooter}>
                    <Text style={style.reviewEmailText}>Posted By: {ref.email}</Text>
                </View>
            </View>
            )
        })
    }

    render(){
        let merchantName = this.props.route.params.merchantName;
        let img = imgs.getCustomBackground()

        return (
            <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
                <View style={style.reviewScreenBackgroundCard}>
                    <Text style={style.reviewScreenTitle}>Reviews for {merchantName}</Text>
                    <Star />
                        <ScrollView style={style.reviewScreenScroll}>
                            {this.showReviews()}
                        </ScrollView>
                    <ReviewModal name={merchantName}/>
                </View>
            </ImageBackground>
        );
    }
}

export const revScrn = new ReviewScreen(); 