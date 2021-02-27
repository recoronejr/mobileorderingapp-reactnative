import React, {useState, useEffect} from 'react'
import {View, Text, Animated} from 'react-native'

import style from '../../constants/Styles'

export default class PercentageBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={style.spacer}>
                <PercentBar starText={this.props.starText} percentage={this.props.percentage} />
            </View>
        )
    }
}

export const PercentBar = ({ starText, percentage }) => {
    const [temp] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(temp, {
            toValue: percentage,
            duration: 500,
        }).start();
    }, [percentage]);
    return (
        <View style={style.sideBySideContainer}>
            <Text style={style.reviewScreenProgressText}>{starText}</Text>
            <View style={style.progressMiddle}>
                <View style={style.progressWrap}>
                    
                </View>
            </View>
            <Text style={style.progressPercentText}>{percentage}%</Text>
        </View>
    );
};
