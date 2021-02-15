import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    //LoginCard
    loginCard: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '87%',
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
        paddingLeft: "4%"
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
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
        color: '#ffffff',
        marginTop: 100
    },
    //Map 
    map:{
        height: "65%"
    },
    //Account Screen
    container: {
        flex: 1
    },
    mainLbl: {
        marginTop: 50
    },
    //Edit Account Screen
    input: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
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
    item: {
        marginTop: 20,
        backgroundColor:'#ffffff',
        alignSelf:"center",
        width:"75%",
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
    },
    //Menu Screen
    menuCard: {
        backgroundColor: '#ffffff',
        width: '80%',
        height: 240,
        alignSelf: "center",
        flexGrow: 1,
        marginBottom: 10,
        padding: 10,
    },
    menuItem:{
        alignSelf:'stretch'
    },
    desc: {
        marginTop: 10,
    },
    scrollview: {
        flexGrow:1,
    },
    scroll: {
        flex:1,
    },
    img: {
        alignSelf: 'center',
        width: '100%',
        height: 100
    },
    orderBtn: {
        height:50,
        backgroundColor: 'lightgray',
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
    //Sign Up Screen
    signUpContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'rgb(112,112,112)'
    },
    signUpCard: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        height: '40%',
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
    signUpTxt: {
        paddingTop: 200,
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    },
    txtInput: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
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
    }
});

export default style;