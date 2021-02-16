import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    //LoginCard
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
    emailInput: {
        height: 30,
        width: 245,
        paddingLeft: 10,
        alignSelf: 'center',
        fontFamily: 'Optima',
        fontSize: 20,
        paddingTop: 12
    },
    passwordinput: {
        height: 30,
        width: 245,
        paddingLeft: 10,
        alignSelf: 'center',
        fontFamily: 'Optima',
        fontSize: 20,
        paddingTop: 12
    },
    usernamecontainer: {
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
    usernamecontainerFocus:{

    },
    passwordcontainer: {
        alignSelf: "center",
        borderBottomWidth: 1,
        width: 200,
        height: 45,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20,
        textAlignVertical: 'top',
        paddingLeft: "10%",
        paddingTop: 5
    },
    loginScreenBtns:{
        flexDirection: 'row',
        marginTop: 35
    },
    loginUsernameContainer:{
        flexDirection: 'row',
    },
    loginUsernameText:{
        marginTop: "7%",
        fontSize: 25,
        fontFamily: 'Optima'
    },
    loginPasswordContainer:{
        flexDirection: 'row',
    },
    loginPasswordText:{
        marginTop: "9%",
        fontSize: 25,
        fontFamily: 'Optima'
    },
    //Buttons
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
    //Header 
    signintxt: {
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'Optima-Bold'
    },
    //Title 
    title:{
        fontSize: 20,
        fontFamily: 'Optima'
    },
    //Map 
    map:{
        height: "65%"
    },
    mainLbl: {
        marginTop: 50
    },
    //Login Screen 
    loginContainer: {
        flex: 1,
        alignItems: "center",
    },
    //Main Screen
    navigator:{
        backgroundColor: '#000000',
    },
    welcometxt: {
        marginTop: 50,
    },
    //Map Screen
    mapContainer: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    menuItem: {
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
    locationDataBackground:{
        
    },
    //Order Screen
    mainLbl: {
        marginTop: 150,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '90%',
        height: '50%',
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
    //Account Info
    accountInfo:{
        textAlign: 'center',
        fontFamily: 'Optima',
        fontSize: 20
    },
    accountInfoLabel:{
        textAlign: 'left',
        fontFamily: 'Optima-Bold',
        fontSize: 20,
    },
    accountInfoContainer:{
        marginTop: 15
    },
    accountInfoCard:{
        marginTop: 50
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
    accountScreenBtns:{
        flexDirection: 'row',
        marginTop: 15
    }, 
    accountHeader:{
        fontFamily: 'Optima-Bold',
        fontSize: 20
    },
    //EDIT SCREEN
    editText:{
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontFamily: 'Optima'
    },
    input: {
        height: 30,
        width: '60%',
        borderColor: 'gray', 
        borderBottomWidth: 2,
        paddingLeft: 10,
        marginLeft: 40,
    },
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
    editHoriz:{
        flexDirection: 'row',
    },
    editScrnHeader:{
        fontSize: 30,
        marginBottom: 40,
        fontFamily: 'Optima'
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
    //Sign Up Screen
    signUpCard: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '87%',
        height: '60%',
        justifyContent: "center",
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
        borderColor: '#fff',
        paddingLeft: 10
    }, 
    signUpContainer: {
        flex: 1,
        backgroundColor: 'rgb(112,112,112)'
    },
    signUpTxt:{
        marginTop: 20,
        marginRight: 10, 
        width: 110,
        fontSize: 15
    },
    txtInput: {
        width: '50%',
        marginTop: 20,
        borderBottomWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    signUpScreenHeader:{
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'Optima-Bold'
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
    //MENU SCREEN
    menuScreenText:{
        fontSize:32
    },
    merchantNameText:{
        fontSize:40
    },
    menuCard: {
        backgroundColor: '#ffffff',
        width: '80%',
        height: 240,
        alignSelf: "center",
        flexGrow: 1,
        marginBottom: 10,
        padding: 10,
    },
    item:{
        alignSelf:'stretch'
    },
    menuItemDesc: {
        marginTop: 10,
    },
    menuScreenScrollView: {
        flexGrow:1,
    },
    menuScreenScroll: {
        flex:1,
    },
    menuItemImg: {
        alignSelf: 'center',
        width: '100%',
        height: 100
    },
    menuOrderBtn: {
        height:50,
        backgroundColor: 'lightgray',
    },
    menuOrderBtnText:{
        alignSelf: 'center',
        fontSize: 24,
        textAlignVertical:'center'
    },
    menuItemText:{
        fontSize:28
    },
    menuScreenContainer:{
        flex: 1
    }
});

export default style;