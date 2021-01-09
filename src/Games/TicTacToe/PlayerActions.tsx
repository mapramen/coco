import { IGamePlayerAction } from "../GameTypes";
import { TicTacToePlayerActionName } from "./Types";

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