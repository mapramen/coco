import { combineReducers } from "@reduxjs/toolkit";
import GameReducer from "./GameReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  user: UserReducer,
  game: GameReducer
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;