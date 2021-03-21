import React, {useState, useEffect} from 'react'
import {View, Text, Animated} from 'react-native'

import style from '../../constants/Styles'

const PercentageBar = ({ starText, percentage }) => {
    const [animation] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animation, { toValue: percentage, duration: 500,}).start();
    }, [percentage]);
    return (
        <View style={style.ratingContainer}>
            <View style={style.sideBySideContainer}>
                <Text style={style.percentBarProgressText}>{starText}</Text>
                <View style={style.percentBarProgressMiddle}>
                    <View style={style.percentBarProgressWrap}>
                        <Animated.View
                            style={[ style.progressBar,{ width: animation.interpolate({
                                                        inputRange: [0, 100],
                                                        outputRange: ["0%", "100%"],
                                }),
                            },]}/>
                    </View>
                </View>
                <Text style={style.progressPercentText}>{percentage}%</Text>
            </View>
        </View>
    );
};

export default PercentageBar;