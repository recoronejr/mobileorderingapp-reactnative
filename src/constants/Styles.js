import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    //Universal 
    backgroundContainer:{
        height: '100%'
    },
    backgroundCard: {
        marginTop: 50,
        alignSelf: 'center',
        backgroundColor: 'rgba(230, 230, 230, 1)',
        width: '87%',
        height: '65%',
        borderRadius: 10,
        alignItems: 'center'
    },
    backgroundCardOutline:{
        height: "97%",
        width: '97%',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        marginTop: 7
    },
    customBackgroundImage:{
        width: '100%', 
        height: '100%',
    },
    imgBackground:{
        width: '100%', 
        height: '100%'
    },
    userInput: {
        height: 30,
        width: '60%',
        borderColor: 'white', 
        borderBottomWidth: 1,
        paddingLeft: 10,
        marginLeft: 40,
        marginBottom: 5,
        fontSize: 18
    }, 
    title:{
        fontSize: 20,
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
    accountInfoCard:{
        backgroundColor: 'rgba(200, 200, 200, .6)',
        borderWidth: 1.5,
        borderColor: 'red',
        borderRadius: 10,
        padding: 10,
        paddingTop: 5,
        marginTop: 40,
        marginBottom: 40
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
        fontFamily: 'Optima',
        fontSize: 30,
        marginTop: '-10%'
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
        margin: 10,
        backgroundColor: 'rgba(0, 100, 200, 1)',
    },
    editBtnTxt:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        color: 'rgba(230, 230, 230, 1)'
    },
    reviewScrnBtn:{

    },
    reviewScrnBtnTxt:{

    },
    signOutBtn:{
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 140,
        height: 60,
        padding: 10,
        margin: 10,
        backgroundColor: 'rgba(0, 100, 200, 1)',
    }, 
    signOutBtnTxt:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        color: 'rgba(230, 230, 230, 1)'
    },
    updateAllBtn:{
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 140,
        height: 60,
        padding: 10,
        margin: 10,
        marginTop: 20,
        backgroundColor: 'rgba(0, 100, 200, 1)'
    },
    updateAllText:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        color: 'rgba(230, 230, 230, 1)'
    },
    updateInfoBtn:{
        fontSize: 10,
        marginLeft: 10
    },
    updateInfoBtnText:{
        fontSize: 15,
        fontFamily: 'Optima-Bold',
        paddingLeft: 5,
        color: 'red'
    }, 
    signInBtn:{
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        maxWidth: '100%',
        height: 60,
        padding: 10,
        marginLeft: 10,
        backgroundColor: 'rgba(0, 100, 200, 1)',
    },
    signInBtnTxt:{
        fontFamily: 'Optima',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        color: 'rgba(230, 230, 230, 1)'
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
    editAccountScrnInputContainers:{
        backgroundColor: 'rgba(200, 200, 200, .6)',
        marginBottom: 2,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10
    },
    editText:{
        marginLeft: 10,
        marginTop: 5, 
        fontSize: 15,
        fontFamily: 'Optima-Bold',
        color: 'red'
    },
    editScrnHeaderContainer:{
        
        marginBottom: 20,
        marginBottom: '8%'
    },
    editScrnHeader:{
        fontSize: 30,
        marginTop: 20
    },
    editScreenInput:{
        color: 'red'
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
    item:{
       
    },
    title:{
        
    },

    //Review Screen 
    reviewScreenProgressText:{

    },
    container: {
        flex: 1,
        backgroundColor: "#F5F8FF",
        alignItems: "center",
        justifyContent: "center",
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
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#323357",
        textAlign: "center",
    },
    totalWrap: {
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
    amountText: {
        fontSize: 16,
        color: "#595B71",
        textAlign: "center",
    },
    progressText: {
        width: 50,
        fontSize: 14,
        color: "#2A5BDA",
    },
    progressPercentText: { width: 40, fontSize: 14, color: "#323357" },
    progressMiddle: {
        height: 15,
        flex: 1,
        marginHorizontal: 10,
    },
    progressWrap: {
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
});

export default style;