import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'

import style from '../constants/Styles'
import {imgs} from '../components/UniversalComps/Images'

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </View>
                        <View style={style.homeScreenMiddleContainer}>
                            <Text style={style.homeScreenMiddleContainerText}>This is where I would like to put what they need to do for their account</Text>
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