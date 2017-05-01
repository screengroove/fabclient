import React from 'react';
import { View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TextInput, } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import SendBird from 'sendbird';
var sb = null;

const sb = new SendBird({
  appId: '04EE84B5-4B5E-4944-A110-7C78ECA24529'
});
   //sb = SendBird.getInstance();

const ChannelHandler = new sb.ChannelHandler();

export default class WelcomeScreen extends React.Component {
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
    console.log("sB", this.sb)

     sb.connect('patrick', function(user, error) {
       console.log("CONNECT CB", user)
     });
     var ChannelHandler = new sb.ChannelHandler();
     //ChannelHandler.onMessageReceived = function (channel, message) { };
  }

  onSendPress = () => {
    console.log(this.state.message);
    this.setState({message: ''});
      this.state.channel.sendUserMessage("YOYOYO", '', '', function(message, error){
      if (error) {
          console.error(error);
          return;
      }

      // onSent
      console.log("MSG",message);
  });

  }

  onPressCreateChannel = ()  => {
    console.log("onPressCreateChannel")
    var _SELF = this;
    var userIds = ['timmy', 'patrick'];
    // distinct is false
    sb.GroupChannel.createChannelWithUserIds(userIds, false, "NewGroupEE", '', '', function(createdChannel, error) {
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
            onPress={() => this.onPressCreateChannel()}
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
