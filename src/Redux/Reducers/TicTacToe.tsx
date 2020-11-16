import { IAction, PLAY_MOVE } from "../actionTypes";


interface ITicTacToeState {
    clickedSquareNumber: number
}

const initialState: ITicTacToeState = {
    clickedSquareNumber: -1
}

export default function (state = initialState, action: IAction): ITicTacToeState {
    switch (action.type) {
        case PLAY_MOVE: {
            return {
                clickedSquareNumber: action.payload.squareNumber
            };
        }
        default:
            return state;
    }
}