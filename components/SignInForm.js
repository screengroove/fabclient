import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-fabclient-6c934.cloudfunctions.net';

class SignInForm extends Component {
  state = {
  phone: '',
  code: ''
};

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code
      });
      console.log("DATA TOKEN", data )
      let resp = await firebase.auth().signInWithCustomToken(data.token);
      console.log("RESP TOKEN", resp)
      await AsyncStorage.setItem('token', data.token);
      this.props.setUid(resp.uid)
      console.log("IN FORM SIGN IN HANDLE SUBMIT")
      this.props.goTo.navigate('profile')
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log("PROPS", this.props.goTo.navigate)
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            keyboardType={'numeric'}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
            keyboardType={'numeric'}
          />
        </View>

        <Button style={styles.submit} onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  submit: {
    marginTop: 30,
    backgroundColor: '#3f8db0',
  },
});
