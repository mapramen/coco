export const PLAY_MOVE = "PLAY_MOVE";

export const MOCK_USER = "MOCK_USER";

export interface IMockUserPayload {
  userId: string,
  userAlias: string,
  gameId: string
}

export interface IPlayMovePayload {
  squareNumber: number
}

type IActionPayload = IPlayMovePayload | IMockUserPayload;

export interface IAction {
  type: string,
  payload: IActionPayload
}