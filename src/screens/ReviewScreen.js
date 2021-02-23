import React from "react";
import { Text, View } from "react-native";

import PercentageBar, {PercentBar} from '../components/ReviewScreen/PercentageBar'

import style from '../constants/Styles'

export default class ReviewScreen extends React.Component{
    render(){
    return (
        <View style={style.container}>
            <View style={style.reviewContainer}>
                <Text style={style.title}>Customer reviews</Text>
                <View style={style.totalWrap}>
                    <View
                        style={style.sideBySideContainer}>
                        <Star /><Star /><Star /><Star /><Star />
                    </View>
                    <Text>4.7 out of 5</Text>
                    <View style={{ marginTop: 40 }}>
                        <PercentageBar starText="5 star" percentage={84}/>
                        <PercentageBar starText="4 star" percentage={9}/>
                        <PercentageBar starText="3 star" percentage={3}/>
                        <PercentageBar starText="2 star" percentage={2}/>
                        <PercentageBar starText="1 star" percentage={68}/>
                    </View>
                </View>
                <Text style={style.amountText}>40 customer ratings</Text>
            </View>
        </View>
    );
    }
}