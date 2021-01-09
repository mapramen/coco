import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Realtime, Types } from "ably";
import { GameName, IGame, IGameEvent, IGamePlayerAction } from "../Games/GameTypes";
import initialState from "../Games/NoGameTypes";
import { IAddPlayerAction, ITicTacToePlayer, ITicTacToePlayerAction, TicTacToePlayerActionName } from "../Games/TicTacToeGameTypes";
import TicTacToeReducer from "./TicTacToeReducer";

interface IGameDetails {
  GameId: string,
  ChannelId: string,
  GameName: GameName
};

interface IGameInitialise {
  userId: string,
  userAlias: string,
  gameId: string
}

var channel: Types.RealtimeChannelCallbacks;

export const setupGame = createAsyncThunk(
  'game/initialise',
  async (params: IGameInitialise, thunkAPI) => {
    const { userId, userAlias, gameId } = params;

    const serverUrl: string = 'http://localhost:3978';
    const ablyApiKey: string = '0309TQ.wqjmrg:HJgHJZuuglg2k9Qk';

    const realtimeClient: Realtime = new Realtime({
      key: ablyApiKey,
      echoMessages: false
    });

    const gameDetails: IGameDetails = await fetch(serverUrl + '/api/games?gameId=' + gameId).then(res => res.json());

    thunkAPI.dispatch(setGameName(gameDetails.GameName))
    thunkAPI.dispatch(setCurrentUserPlayerId(userId))

    console.log(gameDetails)
    var channelId = gameDetails.ChannelId;
    channel = realtimeClient.channels.get(channelId)

    channel.subscribe(message => {
      let gameEvent = message.data as IGameEvent<GameName>;
      console.log(gameEvent);
      thunkAPI.dispatch(processEvent(gameEvent))
    })

    const addPlayerAction: IAddPlayerAction = {
      ActionName: TicTacToePlayerActionName.AddPlayer,
      GameId: gameId,
      PlayerId: userId,
      PlayerAlias: userAlias,
      ChannelId: channelId
    }

    channel.publish('playerAction', addPlayerAction)
  }
);

export const sendPlayerAction = createAsyncThunk(
  'game/playerAction',
  (playerAction: IGamePlayerAction, thunkAPI) => {
    channel.publish('playerAction', playerAction);
  }
)

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setGameId(state, action: PayloadAction<string>) {
      state.gameId = action.payload;
    },
    setGameName(state, action: PayloadAction<GameName>){
      state.gameName = action.payload;
    },
    setCurrentUserPlayerId(state, action: PayloadAction<string>){
      state.currentUserPlayerId = action.payload;
    },
    processEvent(state, action: PayloadAction<IGameEvent<GameName>>){
      let newState: IGame<GameName> = state;

      if(state.gameName === GameName.TicTacToe){
        newState = TicTacToeReducer(state, action.payload);
      }

      state.stateId = newState.stateId;
      state.status = newState.status;
      state.players = newState.players;
      state.teams = newState.teams;
      state.gameState = newState.gameState;
      state.events = newState.events;
    }
  }
});

export const { setGameId, setGameName, setCurrentUserPlayerId, processEvent } = gameSlice.actions;

export default gameSlice.reducer;