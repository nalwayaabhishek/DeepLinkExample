import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator} from "react-navigation";

import Home from './src/Home';
import Article from './src/Article';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Article: { screen: Article, path: 'article/:id', },
},
{
   initialRouteName: "Home"
 }
);
const prefix = Platform.OS == 'android' ? 'myapp://' : 'myapp://';
const App = createAppContainer(AppNavigator)
const MainApp = () => <App uriPrefix={prefix} />;
export default MainApp;
