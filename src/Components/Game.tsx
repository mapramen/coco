import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupGame } from "../Redux/Reducers/GameReducer";
import { GameName, GameStatus, IGame } from "../Redux/Reducers/Games/GameTypes";
import { RootState } from "../Redux/Reducers/RootReducer";
import TicTacToe from "./TicTacToe/Game";

export default function Game() {
  const { userId, userAlias } = useSelector((state: RootState) => state.user);
  const game = useSelector((state: RootState) => state.game as IGame<GameName>);
  const gameId = game.gameId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId !== '' && userAlias !== '' && gameId !== '') {
      dispatch(setupGame({ userId, userAlias, gameId }));
    }
  }, [userId, userAlias, gameId, dispatch]);

  function renderGame(){
    if(game.status !== GameStatus.None && game.gameName === GameName.TicTacToe){
      return <TicTacToe/>
    }
  }

  return (
    <div>
      {renderGame()}
    </div>
  );
}