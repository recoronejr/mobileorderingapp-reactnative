import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";

import style from '../../constants/Styles'

export default function App() {

    
    return (
        <View style={style.backgroundContainer}>
            <View style={style.reviewContainer}>
                <Text style={style.reviewScreenTitle}>Customer reviews</Text>
                <View style={style.reviewScreenWrapper}>
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </View>
                    <Text>4.7 out of 5</Text>
                    <View style={{ marginTop: 40 }}>
                        <View style={style.reviewScreenSpacer}>
                            <PercentageBar starText="5 star" percentage={84} />
                        </View>
                        <View style={style.reviewScreenSpacer}>
                            <PercentageBar starText="4 star" percentage={9} />
                        </View>
                        <View style={style.reviewScreenSpacer}>
                            <PercentageBar starText="3 star" percentage={4} />
                        </View>
                        <View style={style.reviewScreenSpacer}>
                            <PercentageBar starText="2 star" percentage={2} />
                        </View>
                        <View style={style.reviewScreenSpacer}>
                            <PercentageBar starText="1 star" percentage={1} />
                        </View>
                    </View>
                </View>
                <Text style={style.reviewScreenAmountText}>40 customer ratings</Text>
            </View>
        </View>
    );
}