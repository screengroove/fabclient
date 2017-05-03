import React , { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet,Text } from 'react-native';
import { FormLabel, FormInput, Button, Grid, Col, Row } from 'react-native-elements';
import * as actions from '../actions';


class ProfileScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Sign In',
    },
  };

  state = {
    first_name: '',
    last_name: '',
    street: '',
    city: '',
    zip: '',
  }

  handleSubmit = () => {
    this.props.setProfile(this.state)
  }

  render() {
    //const {navigate} = this.props.navigation;

    return (
      <View style={styles.container} >
      <Text style={styles.title}>Please complete your profile</Text>
      <FormLabel>First Name</FormLabel>
      <FormInput
        value={this.state.first_name}
        onChangeText={first_name => this.setState({ first_name })}
      />

      <FormLabel>Last Name</FormLabel>
      <FormInput
        value={this.state.last_name}
        onChangeText={last_name => this.setState({ last_name })}
      />

      <FormLabel>Street</FormLabel>
      <FormInput
        value={this.state.street}
        onChangeText={street => this.setState({ street })}
      />
      <FormLabel>City</FormLabel>
      <FormInput
        value={this.state.city}
        onChangeText={city => this.setState({ city })}
      />
      <FormLabel>Zip Code</FormLabel>
      <FormInput
        value={this.state.zip}
        onChangeText={zip => this.setState({ zip })}
      />
      <Button style={styles.submitBtn} onPress={this.handleSubmit} title="Submit" />

      </View>
    );
  }
}

function mapStateToProps({ user }) {
  return { isAuthed: user.isAuthed };
}

export default connect(mapStateToProps, actions)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
  },
  tandemInput: {
    flexDirection: 'row',
  },
  submitBtn: {
    marginTop: 20,
  }
});
