export const PLAY_MOVE = "PLAY_MOVE";

interface IPlayMovePayload {
    squareNumber: number
}

type IActionPayload = IPlayMovePayload;


export interface IAction {
    type: string,
    payload: IActionPayload
}