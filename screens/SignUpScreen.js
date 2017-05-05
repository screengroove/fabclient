import React from 'react';
import { View, StyleSheet,TouchableHighlight,Text, Image } from 'react-native';
import SignUpForm from '../components/SignUpForm';

export default class SignUpScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Sign Up',
    },
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Welcome to...</Text>
        <Image style={styles.logo}  source={require('../assets/images/logo.png')} />
        <SignUpForm goTo={this.props.navigation} />
      </View>
    );
  }
}

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
