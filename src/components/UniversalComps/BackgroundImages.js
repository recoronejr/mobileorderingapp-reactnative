import React from 'react'
import style from '../../constants/Styles'

import {ImageBackground} from 'react-native'


class BackgroundImages{
    getCustomBackground(){
        const image = require('../../assets/burgerNfries.jpg')
        return image
    }
}

const imgs = new BackgroundImages();
export {imgs}
