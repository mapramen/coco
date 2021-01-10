import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupGame } from "../Reducers/GameReducer";
import { GameName, GameStatus } from "../Games/GameTypes";
import { RootState } from "../Reducers/RootReducer";
import TicTacToe from "./TicTacToe/Game";

export default function GameContainer() {
  const { userId, userAlias } = useSelector((state: RootState) => state.user);
  const game = useSelector((state: RootState) => state.game);
  const gameId = game.gameId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId !== '' && userAlias !== '' && gameId !== '') {
      dispatch(setupGame({ userId, userAlias, gameId }));
    }
  }, [userId, userAlias, gameId, dispatch]);

  if (game.status === GameStatus.None) {
    return <div></div>;
  }

  switch (game.gameName) {
    case GameName.TicTacToe:
      return <TicTacToe />
    default:
      break;
  }

  return <div></div>;
}