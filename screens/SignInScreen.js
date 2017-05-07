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

  componentDidMount(){
    console.log("SIGN IN SCREEN PROPS", this.props)
    //this.props.authUser();
     //this.onAuthComplete(this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log("SIGN IN NEXT PROPS", nextProps)
    //this.onAuthComplete(nextProps);
  }
  //
  // onAuthComplete(props) {
  //   if (props.isAuthed) {
  //     this.props.navigation.navigate('profile');
  //   }
  // }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <SignInForm
          goTo={this.props.navigation}
          phoneNum={this.props.phoneNum}
          setUid={this.props.authAndSetUid}
        />
      </View>
    );
  }
}

function mapStateToProps({ user }) {
  return { isAuthed: user.profile, phoneNum: user.phoneNum };
}

export default connect(mapStateToProps, actions)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#173340',
  },
});
