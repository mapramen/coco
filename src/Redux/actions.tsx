import { PLAY_MOVE, IAction } from "./actionTypes";

export function playMove(squareNumber: number): IAction {
  return {
    type: PLAY_MOVE,
    payload: {
      squareNumber: squareNumber
    }
  }
}