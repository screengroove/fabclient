import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import SignInForm from '../components/SignInForm';

export default class SignInScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Sign In',
    },
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <SignInForm goTo={this.props.navigation} />
         <Button
          onPress={() => navigate('main')}
          title="Go to Brent's profile"
        />

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
