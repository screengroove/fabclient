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
    console.log("PROPS", this.props)
    this.props.authUser();
     this.onAuthComplete(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.isAuthed) {
      this.props.navigation.navigate('profile');
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <SignInForm goTo={this.props.navigation} />
      </View>
    );
  }
}

function mapStateToProps({ user }) {
  return { isAuthed: user.isAuthed };
}

export default connect(mapStateToProps, actions)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
