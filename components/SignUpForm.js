import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-fabclient-6c934.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
      await this.props.goTo.navigate('signin')
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
        <View >
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <Button onPress={this.handleSubmit} title="Submit" />
        </View>
    );
  }
}


export default SignUpForm;
