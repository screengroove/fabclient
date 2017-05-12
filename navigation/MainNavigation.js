import React , { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SignUpScreen from '../screens/SignUpScreen.js';
import SignInScreen from '../screens/SignInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ChatListing from '../screens/ChatListing';
import Loader from '../components/UI/Loader';

class MainNavigation extends Component {

  render(){
    const MainNavigator = TabNavigator (
      {
        signup: { screen: SignUpScreen },
        signin: { screen: SignInScreen },
        profile: { screen: ProfileScreen },
        main: {
          screen: TabNavigator({
            chat: { screen: WelcomeScreen },
            rooms: { screen: ChatListing }
          })
        }
      },
      {
        tabBarOptions: {
          activeTintColor: "#e91e63",
          style:{
            //display: 'none',
          }
        }
      }
    );
    return(
      <View>
        {MainNavigator}
      </View>
    )
  }
}

export default MainNavigation;

// function mapStateToProps({ user }) {
//   return { isAuthed: user.profile, phoneNum: user.phoneNum };
// }
//
// export default connect(mapStateToProps, actions)(MainNavigation);
