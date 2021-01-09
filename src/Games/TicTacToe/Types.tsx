import { GameName, GameStatus, IGame, IGamePlayer, IGameState } from "../GameTypes";
import { ITicTacToeEvent } from "./GameEvents";

export enum TicTacToeMark {
  Cross = 'X',
  Knots = 'O'
}

export enum TicTacToePlayerActionName {
  AddPlayer = 'AddPlayer',
  MarkTile = 'MarkTile'
}

export enum TicTacToeGameEventName {
  GameCreated = 'GameCreated',
  NewPlayer = 'NewPlayer',
  GameStarted = 'GameStarted',
  TileMarked = 'TileMarked',
  NextPlayerTurn = 'NextPlayerTurn',
  PlayerWon = 'PlayerWon',
  GameDraw = 'GameDraw'
}

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