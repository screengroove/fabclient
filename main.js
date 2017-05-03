import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, StackRouter } from 'react-navigation';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import ProfileScreen from './screens/ProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import store from './store';

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
    const MainNavigator = TabNavigator (
      {
        signup: { screen: SignUpScreen },
        signin: { screen: SignInScreen },
        profile: { screen: ProfileScreen },
        main: {
          screen: TabNavigator({
            chat: { screen: WelcomeScreen }
          })
        }
      },
      {
        tabBarOptions: {
          activeTintColor: "#e91e63",
          style:{
            display: 'none',
          }
        }
      }
    );

    return (
      <Provider store={store}>
       <MainNavigator />
     </Provider>
    )
  }
}


Expo.registerRootComponent(App);
