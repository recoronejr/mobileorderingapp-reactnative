import React from 'react'
import {View, Text, Animated} from 'react-native'

import style from '../../constants/Styles'

const PercentageBar = ({ starText, percentage }) => {
    const [animation] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animation, {
            toValue: percentage,
            duration: 500,
        }).start();
    }, [percentage]);
    return (
        <View style={style.sideBySideContainer}>
            <Text style={styles.percentBarProgressText}>{starText}</Text>
            <View style={styles.percentBarProgressMiddle}>
                <View style={styles.percentBarProgressWrap}>
                    <Animated.View
                        style={[ style.progressBar,{ width: animation.interpolate({
                                                     inputRange: [0, 100],
                                                     outputRange: ["0%", "100%"],
                            }),
                        },]}/>
                </View>
            </View>
            <Text style={styles.progressPercentText}>{percentage}%</Text>
        </View>
    );
};

export default PercentageBar;