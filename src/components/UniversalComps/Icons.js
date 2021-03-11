import React from 'react'
import {View, Image} from 'react-native'

import style from '../../constants/Styles'
import {imgs} from './Images'

export const BurgerIcon = () =>{
    let brgrIcon = imgs.getBurgerIcon();
    return <Image style={style.burgerIcon} source={brgrIcon}/>
}