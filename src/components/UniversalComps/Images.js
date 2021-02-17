import React from 'react'
import style from '../../constants/Styles'

import {ImageBackground} from 'react-native'


class BackgroundImages{
    getCustomBackground(){
        const image = require('../../assets/burgerNfries.jpg')
        return image
    }
    getCustomCardImage(){
        const image = require('../../assets/cardBackgroundImage.jpg')
        return image
    }
    getBurgerIcon(){
        const image = require('../../assets/burgerIcon.png')
        return image
    }
    getCityImage(){
        const image = require('../../assets/cityimg.jpg')
        return image
    }
}

const imgs = new BackgroundImages();
export {imgs}
