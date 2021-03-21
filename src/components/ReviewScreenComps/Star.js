import React from "react";
import Svg, { Path } from "react-native-svg";
import {View, Text} from 'react-native'

import style from '../../constants/Styles'
import PercentageBar from '../ReviewScreenComps/PercentageBar'


export default class Star extends React.Component{
  GetCustomerRating(rating){
    if(rating == 1){
      return(
        <OneStarRating />
      )
    }else if(rating == 2){
      return(
        <TwoStarRating />
      )
    }else if(rating == 3){
      return(
        <ThreeStarRating />
      )
    }else if(rating == 4){
      return(
        <FourStarRating />
      )
    }else if(rating == 5){
      return(
        <FiveStarRating />
      )
    }
  }
  render(){
    return(
        <View style={style.starsWrapper}>
          <View style={style.sideBySideContainer}>
            <FiveStarRating />
            <Text style={style.totalStars}>Total Ratings: 10</Text>
          </View>
        </View>
    )
  }
}

const Stars = (props) => {
  return (
    <Svg width={18} height={16} viewBox="0 0 33 30" fill="none" {...props}>
      <Path d="M16.5 0l4.849 9.826 10.843 1.575-7.846 7.648 1.852 10.8-9.698-5.1-9.698 5.1 1.852-10.8-7.846-7.648L11.65 9.826 16.5 0z" fill="#FFCC48"/>
    </Svg>
  )
}

export const OneStarRating = () =>{
  return <View style={style.amountOfStarsContainer}>
            <Stars />
          </View>
}
export const TwoStarRating = () =>{
  return <View style={style.amountOfStarsContainer}>
            <Stars /><Stars />
          </View>
}
export const ThreeStarRating = () =>{
  return <View style={style.amountOfStarsContainer}>
            <Stars /><Stars /><Stars />
          </View>
}
export const FourStarRating = () =>{
  return <View style={style.amountOfStarsContainer}>
            <Stars /><Stars /><Stars /><Stars />
          </View>
}
export const FiveStarRating = () =>{
  return <View style={style.amountOfStarsContainer}>
            <Stars /><Stars /><Stars /><Stars /><Stars />
          </View>
}

export const star = new Star()
