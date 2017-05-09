import SendBird from 'sendbird';

const sb = new SendBird({
  appId: '04EE84B5-4B5E-4944-A110-7C78ECA24529'
});

const ChannelHandler = new sb.ChannelHandler();
const channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();

export const fetchChannels = () => {
  if (channelListQuery.hasNext) {
  channelListQuery.next(function(channelList, error){
    if(channelList.length == 0){
      _SELF.createChannel(nickName);
    } else if (error) {
        console.error(error);
        return;
    }
    else{
        console.log("HAS EXISTING CHANNELS", channelList);
        sb.GroupChannel.getChannel('sendbird_group_channel_30487677_4f410cef5a2bb057729b1dcf3b6fff3d76ae176b', function(channel, error) {
            if (error) {
                console.error(error);
                return;
            }

            // Successfully fetched the channel.
            console.log("FETCHED CHANNEL",channel);
            _SELF.setState({
              channel: channel
            })
        });
    }//esle
  });
}
}
