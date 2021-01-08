import { PLAY_MOVE, IAction, MOCK_USER } from "./actionTypes";

export function setMockUser(userId: string, userAlias: string, gameId: string): IAction {
  return {
    type: MOCK_USER,
    payload: {
      userAlias: userAlias,
      userId: userId,
      gameId: gameId
    }
  }
}

export function playMove(squareNumber: number): IAction {
  return {
    type: PLAY_MOVE,
    payload: {
      squareNumber: squareNumber
    }
  }
}