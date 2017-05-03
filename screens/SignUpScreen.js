import React from 'react';
import { View, StyleSheet,TouchableHighlight,Text } from 'react-native';
import SignUpForm from '../components/SignUpForm';

export default class SignUpScreen extends React.Component {
  // static route = {
  //   navigationBar: {
  //     title: 'Sign Up',
  //   },
  // };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <SignUpForm goTo={this.props.navigation} />
        <TouchableHighlight
          underlayColor={'#4e4273'}
          onPress={() => navigate('SignIn')}
          >
          <Text style={{color: '#000'}}>Sign In</Text>
        </TouchableHighlight>
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
