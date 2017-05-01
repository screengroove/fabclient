import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import WelcomeScreen from './screens/WelcomeScreen';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDnXFm1gxobxN_oyyj85Iq6h9yhx1XrzRA",
      authDomain: "fabclient-6c934.firebaseapp.com",
      databaseURL: "https://fabclient-6c934.firebaseio.com",
      projectId: "fabclient-6c934",
      storageBucket: "fabclient-6c934.appspot.com",
      messagingSenderId: "889308411831"
    };
    firebase.initializeApp(config);
  }

  render() {
    const MainNavigator = TabNavigator({
      signup: {screen: SignUpScreen},
      signin: {screen: WelcomeScreen},
      main: {
         screen: TabNavigator({
            welcomeX: { screen: WelcomeScreen }
         })
      },
    });
    return (
      <MainNavigator />
    )
  }
}


Expo.registerRootComponent(App);
