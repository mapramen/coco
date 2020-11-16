import { PLAY_MOVE } from "./actionTypes";

let nextTodoId = 0;

interface IPlayMovePayload {
  squareNumber: number
}

type iActionPayload = IPlayMovePayload;


export interface IAction {
  type: string,
  payload: iActionPayload
}

export const playMove = (squareNumber: number): IAction => ({
  type: PLAY_MOVE,
  payload: {
    squareNumber: squareNumber
  }
});