import React , { Component } from 'react';
import { View, StyleSheet,TouchableHighlight,Text, Image } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignUpScreen extends Component {
  // static route = {
  //   navigationBar: {
  //     title: 'Sign Up',
  //   },
  // };
  componentWillMount(){
      console.log("SIGN UP SCREEN PROPS", this.props)
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Welcome to...</Text>
        <Image style={styles.logo}  source={require('../assets/images/logo.png')} />
        <SignUpForm goTo={this.props.navigation} savePhoneNum={this.props.savePhoneNum} />
      </View>
    );
  }
}

function mapStateToProps({ user }) {
  return { user: user.isAuthed };
}

export default connect(mapStateToProps, actions)(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#173340',
  },
  logo:{
    resizeMode: 'cover',
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    color: '#efefef',
    marginBottom: 20,
  }
});
