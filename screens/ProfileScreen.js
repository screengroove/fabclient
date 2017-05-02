import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { FormLabel, FormInput, Button, Grid, Col, Row } from 'react-native-elements';


export default class ProfileScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Sign In',
    },
  };

  state = {
    first_name: '',
    last_name: '',
    address: {
      street: '',
      city: '',
      zip_code: ''
    }
  }

  handleSubmit = async () => {
    console.log(this.state)
  }

  render() {
    //const {navigate} = this.props.navigation;

    return (
      <View style={styles.container} >
      <Grid>
        <Col>
          <FormLabel>First Name</FormLabel>
          <FormInput
            value={this.state.first_name}
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Col>
        <Col>
          <FormLabel>Last Name</FormLabel>
          <FormInput
          value={this.state.last_name}
          onChangeText={last_name => this.setState({ last_name })}
          />
        </Col>
      </Grid>



      <Button onPress={this.handleSubmit} title="Submit" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tandemInput: {
    flexDirection: 'row',
  }
});
