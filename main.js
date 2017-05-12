import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store';
import MainNavigation from './navigation/MainNavigation';
import Reactotron from 'reactotron-react-native'
import Loader from './components/UI/Loader';

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

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
    console.log("MAIN DID MOUNT")
  }

  render() {
    return (
      <Provider store={store}>
       <MainNavigation />
     </Provider>
    )
  }
}


Expo.registerRootComponent(App);
