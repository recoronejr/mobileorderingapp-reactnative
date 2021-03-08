import React from 'react'
import {View} from 'react-native'

import style from '../../constants/Styles'

import UserInput from '../UserInfoComps/UserInputs'

export default class Review extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={style.customerReviewBodyWrap}>
                <UserInput style={style.customerReviewInput} placeholder={'Leave a Review'} multiline={true} numberOfLines={10}  maxLength={200} 
                    onChangeText={()=>{
                
                    }}/>
            </View>
        )
    }
}