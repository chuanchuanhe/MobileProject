import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import Home from "./screens/Home";
import Profile from "./screens/Profile";
export default MyNewProject = StackNavigator({
  Home: {
   screen: Home
  },
  Profile: {
   screen: Profile
  }
});