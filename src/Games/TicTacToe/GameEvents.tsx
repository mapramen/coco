import { GameName, IGameEvent } from "../GameTypes";
import { TicTacToeGameEventName, TicTacToeMark } from "./Types";

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