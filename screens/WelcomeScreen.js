import React , { Component } from 'react';
import {
   View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TextInput,
  } from 'react-native';
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
    messageList: [],
    channel: null,
  }


  componentDidMount() {
    var _SELF = this;
    const { uid , profile} = this.props;
    const nickName = makeNickname(profile);
     sb.connect(uid, function(user, error) {
       sb.updateCurrentUserInfo(nickName, function(response, error) {
         console.log(response, error);
        });
     });
  }

  onSendPress = () => {
    console.log(this.state.message);
    this.state.channel.sendUserMessage("YOYOYO", '', '', function(message, error){
      if (error) {
          console.error(error);
          return;
      }
      // onSent
      console.log("MSG",message);
    });
    this.setState({message: ''});
  }

  createChannel = ()  => {
    console.log("CREATE CHANNEL")
    var _SELF = this;
    var userIds = [this.props.uid, 'patrick'];
    // distinct is false
    sb.GroupChannel.createChannelWithUserIds([this.props.uid, 'patrick'], false, "NewGroupEE", '', '', function(createdChannel, error) {
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
        <View style={styles.chatContainer}>
          <Text style={{color: '#000'}}>Chat</Text>
          <TouchableHighlight
            underlayColor={'#4e4273'}
            onPress={() => this.createChannel()}
            >
            <Text style={{color: '#000'}}>Create Channel</Text>
          </TouchableHighlight>

        </View>
        <View style={styles.inputContainer}>
         <View style={styles.textContainer}>
           <TextInput
             style={styles.input}
             value={this.state.message}
             onChangeText={(text) => this.setState({message: text})}
             />
         </View>
         <View style={styles.sendContainer}>
           <TouchableHighlight
             underlayColor={'#4e4273'}
             onPress={() => this.onSendPress()}
             >
             <Text style={styles.sendLabel}>SEND</Text>
           </TouchableHighlight>
         </View>
       </View>
      </View>
    );
  }
}

function mapStateToProps({ user }) {
  return { isAuthed: user.isAuthed, uid: user.uid, profile: user.profile };
}

export default connect(mapStateToProps, actions)(WelcomeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff'
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#6E5BAA',
      paddingTop: 20,
    },
    chatContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#6E5BAA'
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    sendContainer: {
      justifyContent: 'flex-end',
      paddingRight: 10
    },
    sendLabel: {
      color: '#ffffff',
      fontSize: 15
    },
    input: {
      width: '90%',
      color: '#555555',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      height: 32,
      borderColor: '#6E5BAA',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
      backgroundColor: '#ffffff'
    },
  });
