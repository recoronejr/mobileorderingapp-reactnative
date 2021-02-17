import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    //Universal 
    backgroundContainer:{
        height: '100%'
    },
    backgroundCard: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '87%',
        height: '60%',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 8,
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    customBackgroundImage:{
        width: '100%', 
        height: '100%'
    },
    imgBackground:{
        width: '100%', 
        height: '100%'
    },
    input: {
        height: 30,
        width: '60%',
        borderColor: 'gray', 
        borderBottomWidth: 2,
        paddingLeft: 10,
        marginLeft: 40,
    }, 
    title:{
        fontSize: 20,
        fontFamily: 'Optima'
    },
    sideBySideContainer:{
        flexDirection: 'row',
    },
    txtInput: {
        width: '50%',
        marginTop: 20,
        borderBottomWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    //Account Screen
    accountInfo:{
        textAlign: 'center',
        fontFamily: 'Optima',
        fontSize: 20
    },
    accountInfoLabel:{
        textAlign: 'left',
        fontFamily: 'Optima-Bold',
        fontSize: 20
    },
    accountInfoContainer:{
        marginTop: 15
    },
    accountScreenBtns:{
        flexDirection: 'row',
        marginTop: 15
    }, 
    accountHeader:{
        fontFamily: 'Optima-Bold',
        fontSize: 20
    },
    //Update User Account
    updateInfoBtn:{
        fontSize: 10,
        marginLeft: 10,
    },
    updateInfoBtnText:{
        fontSize: 15,
        fontFamily: 'Optima-Bold',
        paddingLeft: 5,
        paddingTop: 12
    }, 
    //Button Comp
    loginbtn: {
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 125,
        height: 60,
        marginRight: 5
    },
    loginBtnTxt:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 18
    },
    signUpBtn: {
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 125,
        height: 60,
        marginLeft: 5
    },
    signUpBtnTxt:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 18
    },  
    editBtn:{
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 140,
        height: 60,
        padding: 10,
        margin: 10
    },
    signOutBtn:{
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 140,
        height: 60,
        textAlign: 'center',
        margin: 10,
        padding: 10
    }, 
    updateAllBtn:{
        paddingTop: 10
    },
    updateAllText:{
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 12,
        width: 125,
        height: 45,
        textAlign: 'center'
    },
    signInBtn:{
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 175,
        height: 60,
        marginRight: 5
    },
    signInBtnText:{
        alignSelf: 'center',
        paddingTop: 20,
        fontSize: 17,
        fontFamily: 'Optima'
    },
    signUpButtons:{
        flexDirection: 'row',
        marginTop: 25,
        alignSelf: 'center'
    },
    //Login Screen 
    loginHeader: {
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'Optima-Bold'
    },
    loginUsernameText:{
        marginTop: "7%",
        fontSize: 25,
        fontFamily: 'Optima'
    },
    loginUsernameInput: {
        alignSelf: "center",
        borderBottomWidth: 1.5,
        width: 220,
        height: 35,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20,
        textAlignVertical: 'top',
        paddingLeft: "4%",
    }, 
    loginPasswordText:{
        marginTop: "7%",
        fontSize: 25,
        fontFamily: 'Optima'
    },
    loginPasswordWrap:{
        flexDirection: 'row'
    },
    loginPasswordInput:{
        alignSelf: "center",
        borderBottomWidth: 1.5,
        width: 200,
        height: 35,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20,
        textAlignVertical: 'top',
        paddingLeft: "4%",
    },
    loginScreenBtns:{
        flexDirection: 'row',
        marginTop: 35
    },
    //Edit Account Screen
    editScrnHeader:{
        fontSize: 30,
        marginBottom: 40,
        fontFamily: 'Optima'
    },
    editText:{
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontFamily: 'Optima'
    },
    //Main Screen
    mainScreenNavigator:{
        backgroundColor: '#000000',
    },
    //Map Screen
    map:{
        height: "60%",
        borderWidth: 1,
        marginTop: 2
    },
    mapScreenLocationHeader:{
        fontSize: 40,
        fontFamily: 'Optima-Bold',
        textAlign: 'center'
    },
    locationDataBackground:{
        
    },
    mapScreenLocationContainer: {
        backgroundColor:'#ffffff',
        alignSelf:"center",
        width:"75%",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        borderColor: 'blue',
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
        marginTop: 10,
        padding: 5,
        height: 60
    },
    //Order Screen
    orderScreenContainer:{
        height: '100%'
    },  
    //Sign Up Screen
    signUpScreenHeader:{
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'Optima-Bold'
    },
    signUpTxt:{
        marginTop: 20,
        marginRight: 10, 
        width: 110,
        fontSize: 15
    },
    //MENU SCREEN
    merchantNameText:{
        fontSize: 40,
        alignSelf: 'center',
        fontFamily: 'Optima',
        padding: 5
    },
    menuScreenText:{
        fontSize:32,
        alignSelf: 'center',
        fontFamily: 'Optima',
        marginBottom: 15,
        marginTop: 5
    },
    menuCard: {
        backgroundColor: '#ffffff',
        width: '95%',
        alignSelf: "center",
        flexGrow: 1,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    menuItem:{
        alignSelf:'stretch'
    },
    menuItemDesc: {
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        fontFamily: 'Optima'
    },
    menuScreenScrollView: {
        flexGrow:1,
    },
    menuScreenScroll: {
        flex:1,
    },
    menuItemImg: {
        alignSelf: 'center',
        width: '80%',
        height: 175,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 15
    },
    menuOrderBtn: {
        height: 50,
        alignSelf: 'flex-end',
        width: '40%',
        padding: 10,
        margin: 5,
        marginLeft: '10%',
        borderWidth: 1,
        borderRadius: 4
    },
    menuOrderBtnText:{
        textAlign: 'center',
        textAlignVertical:'center',
        fontSize: 24,
        fontFamily: 'Optima'
    },
    menuItemText:{
        fontSize:28,
        padding: 10,
        fontFamily: 'Optima'
    },
    menuScreenContainer:{
        flex: 1
    },
    menuOrderTotalTxt:{
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    menuScreenFooter:{
        flexDirection: 'row',
    },
});

export default style;