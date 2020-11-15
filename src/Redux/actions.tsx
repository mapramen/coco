import { PLAY_MOVE } from "./actionTypes";

let nextTodoId = 0;

interface IPlayMovePayload {
    id: number
}

type iActionPayload = IPlayMovePayload;


export interface IAction {
    type: string,
    payload: iActionPayload
}

export const playMove: IAction = ({
  type: PLAY_MOVE,
  payload: {
    id: ++nextTodoId,
  }
});