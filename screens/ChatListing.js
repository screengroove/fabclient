import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
   View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TextInput,
  } from 'react-native';


class ChatListing extends Component {

  render() {
    return(
      <View style={styles.container}>
          <Text>CHAT LISTING</Text>
      </View>
    )
  }

}

function mapStateToProps({ user }) {
  return { isAuthed: user.isAuthed, uid: user.uid, profile: user.profile };
}

export default connect(mapStateToProps, actions)(ChatListing);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff'
    },
  });
