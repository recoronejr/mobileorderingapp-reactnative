import React from "react";
import Svg, { Path } from "react-native-svg";
import {View, Text} from 'react-native'

import style from '../../constants/Styles'
import PercentageBar from '../ReviewScreenComps/PercentageBar'


export default class Star extends React.Component{
  render(){
    return(
      <View style={style.starContainer}>
        <View style={style.starsWrapper}>
          <FiveStarRating />
          <AmountOfReviews />
        </View>
      </View>
    )
  }
}

const Stars = (props) => {
  return (
    <Svg width={18} height={16} viewBox="0 0 33 30" fill="none" {...props}>
      <Path d="M16.5 0l4.849 9.826 10.843 1.575-7.846 7.648 1.852 10.8-9.698-5.1-9.698 5.1 1.852-10.8-7.846-7.648L11.65 9.826 16.5 0z"
            fill="#FFCC48"/>
    </Svg>
  )
}

export const AmountOfReviews = () =>{
  return(
  <View style={{ marginTop: 40 }}>
    <View style={style.starPercentContainer}>
      <View style={style.reviewScreenSpacer}> 
        <PercentageBar starText="5 star" percentage={75} />
      </View>
      <View style={style.reviewScreenSpacer}>
        <PercentageBar starText="4 star" percentage={18} />  
      </View>
      <View style={style.reviewScreenSpacer}>
        <PercentageBar starText="3 star" percentage={2} />
      </View>
      <View style={style.reviewScreenSpacer}>
        <PercentageBar starText="2 star" percentage={4} />
      </View>
      <View style={style.reviewScreenSpacer}>
        <PercentageBar starText="1 star" percentage={3} />
      </View>
    </View>
  </View>
  )
}

export const OneStarRating = () =>{
  return <View style={style.starsContainer}>
          <View style={style.sideBySideContainer}>
            <Stars />
          </View>
          <Text style={style.starsAmountText}>1 out of 5 stars</Text>
        </View>
}
export const TwoStarRating = () =>{
  return <View style={style.starsContainer}>
          <View style={style.sideBySideContainer}>
            <Stars /><Stars />
          </View>
          <Text style={style.starsAmountText}>2 out of 5 stars</Text>
        </View>
}
export const ThreeStarRating = () =>{
  return <View style={style.starsContainer}>
          <View style={style.sideBySideContainer}>
            <Stars /><Stars /><Stars />
          </View>
          <Text style={style.starsAmountText}>3 out of 5 stars</Text>
        </View>
}
export const FourStarRating = () =>{
  return <View style={style.starsContainer}>
          <View style={style.sideBySideContainer}>
            <Stars /><Stars /><Stars /><Stars />
          </View>
          <Text style={style.starsAmountText}>4 out of 5 stars</Text>
        </View>
}
export const FiveStarRating = () =>{
  return <View style={style.starsContainer}>
          <View style={style.sideBySideContainer}>
            <Stars /><Stars /><Stars /><Stars /><Stars />
          </View>
          <Text style={style.starsAmountText}>5 out of 5 stars</Text>
        </View>
}

export const CustomerRating = () =>{
  
}