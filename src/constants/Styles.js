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
        height: "80%",
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
    modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    //Home Screen
    homeScreenContainer:{
        
    },
    homeScreenBackgroundCard:{
        marginTop: 5,
        alignSelf: 'center',
        backgroundColor: 'rgba(230, 230, 230, 0.8)',
        width: '87%',
        height: "75%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    homeScreenWelcomeBannerContainer:{
        width: "75%",
        height: 150,
        marginBottom: 10
    },
    homeScreenImage:{
        width: '100%',
        height: 130,
        
    },
    homeScreenWecomeText:{
        alignSelf: 'center',
        fontSize: 38,
        fontFamily: 'Optima',
        marginTop: -100
    },
    homeScreenDesc:{
        textAlign: 'center',
        fontFamily: 'Optima'
    },
    homeScreenMiddleContainer:{
        borderRadius: 10,
        borderWidth: 1,
        width: "75%",
        height: 150,
        marginTop: -100,
        marginBottom: 10,
        padding: 10
    },
    homeScreenMiddleContainerText:{
        fontFamily: 'Optima'
    },
    homeScreenBottomContainer:{
        borderRadius: 10,
        borderWidth: 1,
        width: "75%",
        height: 150,
        marginBottom: 10,
        padding: 10
    },
    homeScreenBottomContainerText:{
        fontFamily: 'Optima'
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
    loginUsernameContainer:{

    },
    loginPwdContainer:{
        marginTop: 30,
        marginBottom: 30
    },
    userIconCntainer:{
        marginLeft: -20,
        marginRight: 30,
    },
    pwdIconCntainer:{
        marginLeft: -20,
        marginRight: 20,
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
        width: 220,                                                     /////
        height: 35,
        paddingLeft: "2%",
        fontSize: 24,
        color: 'black'
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
        width: 220,
        height: 40,                                 ////
        paddingLeft: "2%",
        fontSize: 24
    },
    loginScreenBtns:{
        flexDirection: 'row',
        marginTop: 35
    },
    userInputContainer:{
        alignItems: 'flex-end'
    },
    pwdInputContainer:{

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
    //Edit Account Modal 
    modalCenteredView:{
        margin: 20,
        marginTop: '50%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        height: '50%'
    },
    userInfoUpdateModalBtnContainer:{
        borderRadius: 10,
        padding: 10,
        width: 225,
        backgroundColor: "white",
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 1
    },  
    userInfoModalUpdateBtn:{
        
    },
    userInfoModalUpdateBtnTxt:{
        textAlign: 'center',
        fontWeight: 'bold'
    },
    modalAddBtn:{
        borderRadius: 10,
        padding: 10,
        width: 250,
        backgroundColor: "white",
        marginTop: 20
    },
    modalAddBtnTxt:{
        textAlign: 'center',
        fontWeight: 'bold'
    },
    userInfoModalInputContainer:{
        
    },
    userInfoInputsHeaderTxt:{
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    },
    userInfoModalInput:{
        borderRadius: 5,
        borderWidth: 1,
        width: 250,
        marginTop: 10,
        padding: 5
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
    reviewScreenBackgroundCard:{
        marginTop: 40,
        alignSelf: 'center',
        backgroundColor: 'rgba(230, 230, 230, 0.8)',
        width: '87%',
        height: "90%",
        alignItems: "center",
        borderRadius:10,
    },
    reviewScreenTitle: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#323357",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 20
    },
    reviewScreenAmountText: {
        fontSize: 16,
        color: "#595B71",
        textAlign: "center",
    },
    reviewUserInfo:{
        marginLeft: -20,
        padding: 5,
    },
    reviewScreenReviewInfo:{
        marginLeft: 10,
        padding: 5,
        width: '60%'
    },
    reviewInfoText:{
        fontSize: 12
    },
    revScrollContainer:{
        height: 350
    },
            //Customer Reviews
    reviewContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 10,
    },
    reviewUserInfo:{
        backgroundColor: 'red'
    },
    reviewHeader:{
        flexDirection: 'row',
        marginTop: 8
    },
    reviewEmailText:{
        margin: 10
    },
    reviewDateText:{
        marginLeft: '25%'
    },
    reviewRatingContainer:{
        margin: 5,
        marginTop: 7,
        position: 'relative'
    },
    reviewRatingText:{
        
    },
    reviewSubjectText:{
        marginLeft: 10,
        fontSize: 18
    },
    reviewBodyContainer:{
        borderRadius: 5,
        borderWidth: 1,
        height: 70,
        width: '95%',
        alignSelf: 'center',
        padding: 5,
        margin: 2
    },
    reviewBodyText:{

    },
    reviewFooter:{

    },
            // Review Modal
    reviewModalView: {
        margin: 20,
        marginTop: '50%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    reviewModalHeader:{
        fontSize: 22,
        marginBottom: 15,
        marginTop: -15
    },  
    reviewModalExitBtnContainer:{
        marginTop: -20,
        marginLeft: '75%'
    },
    reviewModalExitBtn:{
        fontSize: 20,
        padding: 10
    },
    reviewModalSubmitButton:{
        marginTop: 50,
        borderRadius: 20,
        width: 250,
        backgroundColor: "white",
    },
    reviewModalOpenButton:{
        borderRadius: 10,
        marginTop: 40,
        padding: 10,
        width: 250,
        backgroundColor: "white",
    },
    reviewModalBtnText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    reviewModalTxt: {
        marginBottom: 15,
        textAlign: "center"
    },
    reviewModalSubjectInput:{
        borderRadius: 10,
        width: 250,
        height: 35,
        textAlignVertical: 'top',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#F5F8FF',
        marginBottom: 10
    },
    reviewModalCustomerRatingContainer:{
        borderRadius: 10,
        width: 200,
        height: 35,
        textAlignVertical: 'top',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 10
    },  
    reviewRating:{
        marginTop: 10
    },  
    //Customer Review
    customerReviewBodyWrap:{
        backgroundColor: '#F5F8FF',
        borderRadius: 10,
        marginBottom: 15
    },
    customerReviewInput:{
        borderColor: 'black',
        borderRadius: 10,
        width: 250,
        height: 175,
        textAlignVertical: 'top',
        padding: 10,
        paddingTop: 10
    },
    //Percent Comp
    percentBarProgressText: {
        width: 35,
        fontSize: 11,
        color: "#2A5BDA",
    },
    progressPercentText: { 
        width: 40, 
        fontSize: 11, 
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
        minWidth: 5
    },
    //Star Comp
    starsAmountText:{
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 11
    }, 
    starsContainer:{
        marginBottom: -20
    },
    starsWrapper: {
        marginTop: 10,
        marginBottom: 15,
        width: '75%',
        backgroundColor: "#F5F8FF",
        borderRadius: 20,
        alignItems: "center",
        padding: 10,
        flexDirection: 'row',
    },
    amountOfStarsContainer:{
        flexDirection: 'row',
        width: 95
    },
    totalStars:{
        marginLeft: 10
    },  
    //Navigation
    navIcon:{
        marginBottom: -10
    },
});

export default style;