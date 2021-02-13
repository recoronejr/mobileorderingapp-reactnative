import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    //LoginCard
    loginCard: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
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
    usernamecontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        flexDirection: "column",
        marginTop: 20
    }, 
    emailInput: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    passwordinput: {
        height: 30,
        width: '80%',
        borderColor: 'gray', 
        borderWidth: 2,
        paddingLeft: 10,
        alignSelf: 'center'
    },
    passwordcontainer: {
        alignSelf: "center",
        backgroundColor: '#ffffff',
        width: 300,
        justifyContent:"space-between",
        marginTop: 20,
    },
    //Buttons
    signUpBtn: {
        height: 100,
        alignSelf: 'center',
        marginTop: 10, 
        marginBottom: 30
    },
    //Header 
    signintxt: {
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center'
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
        flex: 1,
    },
    mainLbl: {
        marginTop: 50,
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
    container: {
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
    container: {
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
        marginTop: 50,
    },
    //Sign Up Screen
    signUpContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'rgb(112,112,112)'
    },
    signUpCard: {
        marginTop: 150,
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
    loginbtn: {
        alignSelf: 'center',
        width: 50,
        marginTop: 20,
        
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
        marginTop: 20,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default style;