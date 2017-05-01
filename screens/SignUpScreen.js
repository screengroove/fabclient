import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignUpForm from '../components/SignUpForm';

export default class SignUpScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Sign Up',
    },
  };

  render() {
    return (
      <View>
        <SignUpForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
