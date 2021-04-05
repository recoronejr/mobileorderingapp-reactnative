import React from 'react'
import {View, Text, Image, ImageBackground, Button} from 'react-native'

import style from '../constants/Styles'
import {imgs} from '../components/UniversalComps/Images'
import {SetAddressBtn, SetPaymentBtn} from '../components/UniversalComps/ButtonComp'

export default class HomeScreen extends React.Component{
    render(){
        let banner = imgs.getBanner();
        let background = imgs.getCustomBackground();
        return(
            <View style={style.homeScreenContainer}>
                <Image source={banner} style={style.homeScreenImage}/>
                <ImageBackground source={background} style={style.imgBackground} blurRadius={30}>
                    <View style={style.homeScreenBackgroundCard}>
                        <View style={style.homeScreenWelcomeBannerContainer}>
                            <Text style={style.homeScreenWecomeText}>Welcome!</Text>
                            <Text style={style.homeScreenDesc}>
                                
                            </Text>
                        </View>
                        <View style={style.homeScreenMiddleContainer}>
                            <SetAddressBtn />
                            <SetPaymentBtn />
                        </View>
                        <View style={style.homeScreenBottomContainer}>
                            <Text style={style.homeScreenBottomContainerText}>This is where I would like to display any open orders</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
