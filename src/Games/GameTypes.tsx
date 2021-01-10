export enum GameName {
  None = '',
  TicTacToe = 'Tic-Tac-Toe'
}

export enum GameStatus {
  None = '',
  Created = 'Created',
  Started = 'Started',
  InProgress = 'InProgress',
  Completed = 'Completed'
}

export interface IGamePlayerAction {
  GameId: string,
  ActionName: string,
  PlayerId: string
}

export interface IGamePlayer {
  playerId: string,
  playerAlias: string,
}

export interface IGameTeam {
  teamId: string,
  teamName?: string,
}

export interface IGameState {
}

export interface IGameEvent {
  GameId: string,
  EventId: string,
  PreviousEventId: string,
  EventName: string
}

export interface IGame {
  gameId: string,
  gameName: GameName,
  stateId: string,
  status: GameStatus,
  currentUserPlayerId: string,
  players: Array<IGamePlayer>,
  teams: Array<IGameTeam>,
  gameState: IGameState,
  events: Array<IGameEvent>
}

const initialGame: IGame = {
  gameId: '',
  gameName: GameName.None,
  stateId: '',
  status: GameStatus.None,
  currentUserPlayerId: '',
  players: [],
  teams: [],
  gameState: {},
  events: []
}

export default initialGame;