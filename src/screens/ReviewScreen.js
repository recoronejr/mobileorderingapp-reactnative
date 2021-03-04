import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, ImageBackground} from "react-native";

import style from '../constants/Styles'
import {imgs} from '../components/UniversalComps/Images'

import {OneStarRating, TwoStarRating, ThreeStarRating, FourStarRating, FiveStarRating, AmountOfReviews} from '../components/ReviewScreenComps/Star'

import Star from '../components/ReviewScreenComps/Star'
import PercentageBar from '../components/ReviewScreenComps/PercentageBar'
import Review from "../components/ReviewScreenComps/Review";

export default function App() {

    let img = imgs.getCustomBackground();
    return (
        <ImageBackground source={img} style={style.imgBackground} blurRadius={20}>
            <View style={style.backgroundCard}>
                <Text style={style.reviewScreenTitle}>Customer reviews</Text>
                    <View style={style.revScreenCustomerReview}>
                        <Review />
                    </View>
                    <Star />
                <Text style={style.reviewScreenAmountText}>40 customer ratings</Text>
            </View>
        </ImageBackground>
    );
}