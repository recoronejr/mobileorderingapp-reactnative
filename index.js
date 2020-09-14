import React, { Component } from "react";
import Login from "./user_authentication/Login";
import App from "./App.js";
import { DrawerNavigator } from "react-navigation";
const ScreenRouter = DrawerNavigator(
  {
    Home: { screen: App},
    Login: { screen: Login },
  }
);
export default ScreenRouter;