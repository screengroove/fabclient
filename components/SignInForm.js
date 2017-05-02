import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-fabclient-6c934.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code
      });
      await firebase.auth().signInWithCustomToken(data.token);
      await AsyncStorage.setItem('token', JSON.stringify(data.token));
      await console.log("GET TOKEN", AsyncStorage.getItem('token') )
      //this.props.goTo.navigate('main')
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
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
