import { Context } from '@microsoft/teams-js';
import { Realtime } from 'ably'

interface IChannelDetails {
  ChannelId: string
};

export default class GameActionCreator {
  private static readonly serverUrl: string = 'https://df81d9c4c2fc.ngrok.io';
  private static readonly ablyApiKey: string = '0309TQ.wqjmrg:HJgHJZuuglg2k9Qk';
  private static readonly realtimeClient: Realtime = new Realtime({
    key: GameActionCreator.ablyApiKey,
    echoMessages: false
  });

  public static initialise(context: Context): void {
    GameActionCreator.realtimeClient.connection.on('connected', function () {
      console.log("That was simple, you're now connected to Ably in realtime");
    });

    fetch(GameActionCreator.serverUrl + '/api/games/channelid?gameId=' + context.subEntityId)
      .then(res => res.text())
      .then(result => this.initialiseChannels(context, JSON.parse(result)), (error) => { });

    console.log("Initialised")
  }

  private static initialiseChannels(context: Context, channelDetails: IChannelDetails): void {
    console.log(channelDetails)
    var channelId = channelDetails.ChannelId;
    var channel = GameActionCreator.realtimeClient.channels.get(channelId)

    channel.subscribe(message => {
      console.log(message.data)
    })

    var userId = context.userObjectId;
    var userName = context.userPrincipalName?.split('@')[0]

    var addMeAction = {
      PlayerActionName: 'AddMe',
      PlayerId: userId,
      ActionData: {
        'ChannelId': channelId,
        'PlayerName': userName
      }
    }

    channel.publish('AddMe', addMeAction)
  }
};
