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
        backgroundColor: 'rgba(230, 230, 230, 0.8)',
        width: '87%',
        height: '60%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
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
        marginLeft: 40
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
        paddingRight: 5
    },
    //ICONS 
    burgerIcon:{
        alignSelf: 'center',
        width: "20%",
        height: '10%'
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
        borderColor: 'rgba(230, 230, 230, 1)',
        borderWidth: 1,
        width: 125,
        height: 60,
        marginRight: 5,
        backgroundColor: 'rgba(0, 100, 200, 1)',
    },
    loginBtnTxt:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 18,
        color: 'rgba(230, 230, 230, 1)'
    },
    signUpBtn: {
        borderRadius: 10,
        borderColor: 'rgba(230, 230, 230, 1)',
        borderWidth: 1,
        width: 125,
        height: 60,
        marginLeft: 5,
        backgroundColor: 'rgba(0, 100, 200, 1)',
    },
    signUpBtnTxt:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 18,
        color: 'rgba(230, 230, 230, 1)'
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
        marginTop: 25,
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'Optima-Bold'
    },
    loginUsernameText:{
        marginTop: "5%",
        fontSize: 25,
        fontFamily: 'Optima',
        borderBottomWidth: 1.5
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
        marginBottom: 0.5,
        marginLeft: 0,
        fontSize: 25,
        fontFamily: 'Optima', 
        borderBottomWidth: 1.5,
    },
    loginWrapper:{
        flexDirection: 'row'
    },
    loginPasswordInput:{
        alignSelf: "center",
        borderBottomWidth: 1.5,
        width: 180,
        height: 40,
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
    mapScreenBackgroundImg:{
        height: '100%',
        width: '100%'
    },
    map:{
        height: "60%",
        borderWidth: 1,
        marginTop: 2
    },
    mapScreenLocationHeader:{
        fontSize: 40,
        fontFamily: 'Optima-Bold',
        color: '#FFF',
        padding: 10
    },
    locationDataBackground:{
        
    },
    mapScreenLocationContainer: {
        alignSelf:"center",
        width:"75%",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        elevation: 11,
        borderRadius:10,
        borderColor: '#FFF',
        marginTop: 10,
        padding: 5,
        height: 60,
        backgroundColor: 'rgba(0, 100, 200, .7)'
    },
    mapScreenLocatonTitle:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Optima-Bold',
        paddingLeft: 10
    },  
    mapScreenLocationAddress:{
        color: 'white',
        fontSize: 15,
        fontFamily: 'Optima',
        textAlign: 'center',
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
    menuItem:{
        
    },
    menuCard: {
        backgroundColor: 'rgba(230, 230, 230, 0.8)',
        width: '85%',
        alignSelf: "center",
        flexGrow: 1,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFF'
    },
    menuSideBySide:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    menuItemName:{
        width: '65%',
        fontSize: 25,
        padding: 10,
        fontFamily: 'Optima-Bold'
    },
    menuItemPrice:{
        width: '35%',
        fontSize: 25,
        padding: 10,
        fontFamily: 'Optima-Bold',
        textAlign: 'right',
    },  
    menuItemImg: {
        alignSelf: 'center',
        width: '80%',
        height: 175,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 15,
    },
    menuItemDescContainer:{
        backgroundColor: 'rgba(0, 100, 200, .7)',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 10
    },
    menuItemDesc: {
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        fontFamily: 'Optima',
        fontSize: 15,
        color: '#FFF',
    },
    merchantTextWrapper:{
        backgroundColor: 'rgba(0, 100, 200, .7)',
        width: '100%',
        height: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: '#FFF',
        borderWidth: 1,
        flexDirection: 'row'
    },
    merchantNameText:{
        fontSize: 45,
        textAlign: 'center',
        fontFamily: 'Optima',
        padding: 20,
        color: '#FFF'
    },
    menuScreenScrollView: {
        flexGrow: 1,
        marginTop: 10
    },
    menuScreenScroll: {
        flex:1,
    },
    menuScreenFooter:{
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 100, 200, .6)',
    },
    menuOrderTotalTxt:{
        marginTop: 20,
        marginLeft: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF'
    },
    menuOrderBtn: {
        height: 50,
        alignSelf: 'flex-end',
        width: '40%',
        padding: 10,
        margin: 5,
        marginLeft: '10%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#FFF'
    },
    menuOrderBtnText:{
        textAlign: 'center',
        textAlignVertical:'center',
        fontSize: 24,
        fontFamily: 'Optima',
        color: '#FFF'
    },
    //Review Screen
    reviewScreenSpacer: {

    },
    reviewContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 40,
        minWidth: "80%",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowColor: "rgba(193, 211, 251, 0.5)",
        elevation: 5,
    },
    reviewScreenTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#323357",
        textAlign: "center",
    },
    reviewScreenWrapper: {
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: "#F5F8FF",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    reviewScreenAmountText: {
        fontSize: 16,
        color: "#595B71",
        textAlign: "center",
    },
    percentBarProgressText: {
        width: 50,
        fontSize: 14,
        color: "#2A5BDA",
    },
    progressPercentText: { 
        width: 40, 
        fontSize: 14, 
        color: "#323357" 
    },
    percentBarProgressMiddle: {
        height: 15,
        flex: 1,
        marginHorizontal: 10,
    },
    percentBarProgressWrap: {
        backgroundColor: "#F5F8FF",
        borderRadius: 18,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 2,
    },
    progressBar: {
        flex: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "#ffcc48",
        shadowOpacity: 1.0,
        shadowRadius: 4,
        backgroundColor: "#FFCC48",
        borderRadius: 18,
        minWidth: 5,
    },


    
    item:{
       
    },
    title:{
        
    },
});

export default style;