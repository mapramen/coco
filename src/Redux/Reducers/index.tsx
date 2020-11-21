import { combineReducers } from "redux";
import tictactoeReducer from './TicTacToe';

export const rootReducer = combineReducers({
    tictactoe: tictactoeReducer
});

export type RootState = ReturnType<typeof rootReducer>;