import React, { Component } from "react";
import { View, Text,Button } from "react-native";
import LoginScreen from './Login';

const SignUpScreen = ({ navigation }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text>Hello World!</Text>
        <Button title = 'Login'onPress={() => {navigation.navigate("Login")}}/>
      </View>
    )

}

export default SignUpScreen;