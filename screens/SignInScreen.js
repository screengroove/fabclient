import React , { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Button } from 'react-native';
import SignInForm from '../components/SignInForm';
import * as actions from '../actions';

 class SignInScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Sign In',
    },
  };

  componentWillMount(){
    this.props.authUser();
  }

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

function mapStateToProps({ user }) {
  return { profile: user.profile };
}

export default connect(mapStateToProps, actions)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
