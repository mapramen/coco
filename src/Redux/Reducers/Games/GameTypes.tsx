export enum GameName {
  None = '',
  TicTacToe = 'Tic-Tac-Toe'
}

export enum GameStatus {
  None = '',
  Created = 'Created',
  Started = 'Started',
  Completed = 'Completed'
}

export interface IGamePlayerAction {
  GameId: string,
  ActionName: string,
  PlayerId: string
}

export interface IGamePlayer<T> {
  playerId: string,
  playerAlias: string,
}

export interface IGameTeam<T> {
  teamId: string,
  teamName?: string,
}

export interface IGameState<T> {

}

export interface IGameEvent<T> {
  GameId: string,
  EventId: string,
  PreviousEventId: string,
  EventName: string
}

export interface IGame<T> {
  gameId: string,
  gameName: T,
  stateId: string,
  status: GameStatus,
  currentUserPlayerId: string,
  players: Array<IGamePlayer<T>>,
  teams: Array<IGameTeam<T>>,
  gameState: IGameState<T>,
  events: Array<IGameEvent<T>>
}