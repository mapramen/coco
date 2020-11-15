import { IAction } from '../actions';
import { PLAY_MOVE } from '../actionTypes';

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
                clickedSquareNumber: action.payload.id
            };
        }
        default:
            return state;
    }
}