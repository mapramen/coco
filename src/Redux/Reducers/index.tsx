import { combineReducers } from "redux";
import tictactoeReducer from './TicTacToe';
import userReducer from './User';

export const rootReducer = combineReducers({
  user: userReducer,
  tictactoe: tictactoeReducer
});

export type RootState = ReturnType<typeof rootReducer>;