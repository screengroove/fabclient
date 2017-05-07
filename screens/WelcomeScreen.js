import React , { Component } from 'react';
import {
   View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TextInput,
  } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { makeNickname } from '../helpers/utils';
import SendBird from 'sendbird';
var sb = null;

const sb = new SendBird({
  appId: '04EE84B5-4B5E-4944-A110-7C78ECA24529'
});

const ChannelHandler = new sb.ChannelHandler();

class WelcomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Welcome',
    },
  };

  state = {
    message: '',
    messages: [],
    channel: null,
  }


  componentDidMount() {
    var _SELF = this;
    const { uid , profile} = this.props;
     //const nickName = makeNickname(profile);
     const nickName = 'NICKNAME';
     sb.connect(uid, function(user, error) {
       sb.updateCurrentUserInfo(nickName, function(response, error) {
         console.log(response, error);
       });
         _SELF.createChannel(nickName);
      });
      this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSendPress = (messages = []) => {
    let lastMsg = this.state.messages[0]['text']
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    }, ()=>{this.logMsg(this.state.messages[0]['text'])});

  }

  logMsg = (msg) => {
    console.log("MESSAGE ARRAY", this.state.messages)
    this.state.channel.sendUserMessage(msg, '', '', function(message, error){
      if (error) {
          console.error(error);
          return;
      }
      // onSent
      console.log("MSG",message);
    });
  }

  createChannel = (channelName)  => {
    console.log("CREATE CHANNEL")
    var _SELF = this;
    var userIds = [this.props.uid, 'patrick'];
    // distinct is false
    sb.GroupChannel.createChannelWithUserIds(userIds, false, channelName, '', '', function(createdChannel, error) {
      if (error) {
          console.error(error);
          return;
      }
      _SELF.setState({
        channel: createdChannel
      })

      console.log(_SELF.state.channel);
    });
  }//createChannel

  render() {
    return (
      <View style={styles.container}>
          <GiftedChat
            messages={this.state.messages}
            onSend={this.onSendPress}
            user={{
                _id: '2',
            }}
          />
      </View>
    );
  }
}

function mapStateToProps({ user }) {
  return { isAuthed: user.isAuthed, uid: user.uid, profile: user.profile };
}

export default connect(mapStateToProps, actions)(WelcomeScreen);

WelcomeScreen.defaultProps = {
  first_name: 'FNAME',
  last_name: 'LNAME',
  uid: 'UID'
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff'
    },
  });
