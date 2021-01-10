import { Header } from "@fluentui/react-northstar";
import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { GameStatus } from "../../Games/GameTypes";
import { ITicTacToeGame } from "../../Games/TicTacToe/Types";
import { RootState } from "../../Reducers/RootReducer";
import { selectGameStatus, selectGame } from "../../Selectors/GameSelector";
import { getWinner, getCurrentTurnPlayer } from "../../Selectors/TicTacToeSelector";

export default function GameStatusHeader() {
  const gameStatus = useSelector((state: RootState) => selectGameStatus(state), shallowEqual);

  switch (gameStatus) {
    case GameStatus.Completed:
      return <GameCompletedHeader />
    case GameStatus.InProgress:
      return <GameInProgressHeader />
    default:
      break;
  }

  return (null);
}

function GameCompletedHeader() {
  const game = useSelector((state: RootState) => selectGame<ITicTacToeGame>(state));

  var gameResultString;
  if (game.gameState.winnerPlayerId === '') {
    gameResultString = 'Draw';
  }
  else {
    const winnerPlayer = getWinner(game);
    gameResultString = winnerPlayer.playerId === game.currentUserPlayerId
      ? 'You' : winnerPlayer.playerAlias;
    gameResultString += ' won!';
  }

  return <Header as="h2" content={gameResultString} align="center" />;
}

function GameInProgressHeader() {
  const game = useSelector((state: RootState) => selectGame<ITicTacToeGame>(state));
  const currentTurnPlayer = getCurrentTurnPlayer(game);

  const gameProgressString: string
    = (currentTurnPlayer.playerId === game.currentUserPlayerId
      ? 'Your' : currentTurnPlayer.playerAlias + '\'s')
    + ' turn - ' + currentTurnPlayer.tileMark;

  return <Header as="h2" content={gameProgressString} align="center" />;
}