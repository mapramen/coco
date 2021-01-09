import { GameName, GameStatus, IGame, IGameEvent, IGamePlayer, IGamePlayerAction, IGameState } from "./GameTypes";

enum TicTacToeMark {
  Cross = 'X',
  Knots = 'O'
}

export enum TicTacToePlayerActionName {
  AddPlayer = 'AddPlayer',
  MarkTile = 'MarkTile'
}

export interface IAddPlayerAction extends IGamePlayerAction {
  ActionName: TicTacToePlayerActionName.AddPlayer,
  PlayerAlias: string,
  ChannelId: string
}

export interface IMarkTileAction extends IGamePlayerAction {
  ActionName: TicTacToePlayerActionName.MarkTile,
  TileNumber: number
}

export type ITicTacToePlayerAction = IAddPlayerAction | IMarkTileAction;

export enum TicTacToeGameEventName {
  GameCreated = 'GameCreated',
  NewPlayer = 'NewPlayer',
  GameStarted = 'GameStarted',
  TileMarked = 'TileMarked',
  NextPlayerTurn = 'NextPlayerTurn',
  PlayerWon = 'PlayerWon',
  GameDraw = 'GameDraw'
}

export interface IGameCreatedEvent extends IGameEvent {
  EventName: TicTacToeGameEventName.GameCreated
  GameName: GameName
}

export interface INewPlayerEvent extends IGameEvent {
  EventName: TicTacToeGameEventName.NewPlayer
  PlayerId: string,
  PlayerAlias: string,
  TileMark: TicTacToeMark
}

export interface IGameStartedEvent extends IGameEvent {
  EventName: TicTacToeGameEventName.GameStarted
}

export interface ITileMarkedEvent extends IGameEvent {
  EventName: TicTacToeGameEventName.TileMarked,
  PlayerId: string,
  TileNumber: number,
  TileMark: TicTacToeMark
}

export interface INextPlayerTurnEvent extends IGameEvent {
  EventName: TicTacToeGameEventName.NextPlayerTurn,
  PlayerId: string
}

export interface IPlayerWonEvent extends IGameEvent {
  EventName: TicTacToeGameEventName.PlayerWon,
  PlayerId: string
}

export interface IGameDrawEvent extends IGameEvent {
  EventName: TicTacToeGameEventName.GameDraw
}

export type ITicTacToeEvent = IGameCreatedEvent | INewPlayerEvent | IGameStartedEvent | ITileMarkedEvent | INextPlayerTurnEvent | IPlayerWonEvent | IGameDrawEvent;

export interface ITicTacToePlayer extends IGamePlayer {
  tileMark: TicTacToeMark
}

export interface ITicTacToeState extends IGameState {
  currentTurnPlayerId: string,
  winnerPlayerId: string,
  tiles: Array<string>
}

export interface ITicTacToeGame extends IGame {
  players: Array<ITicTacToePlayer>,
  gameState: ITicTacToeState,
  events: Array<ITicTacToeEvent>
}

const initialState: ITicTacToeGame = {
  gameId: '',
  gameName: GameName.TicTacToe,
  stateId: '',
  status: GameStatus.None,
  currentUserPlayerId: '',
  players: [],
  teams: [],
  gameState: { tiles: Array<string>(9), currentTurnPlayerId: '', winnerPlayerId: '' },
  events: []
}

export default initialState;