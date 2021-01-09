import { useSelector } from "react-redux";
import React from 'react';
import './Game.css';
import Tile from './Tile';
import { RootState } from "../../Reducers/RootReducer";
import { ITicTacToeGame, ITicTacToePlayer } from "../../Games/TicTacToeGameTypes";
import { GameStatus } from "../../Games/GameTypes";

export default function Board() {
  const game: ITicTacToeGame = useSelector((state: RootState) => state.game as ITicTacToeGame);

  const renderTile = (tileNumber: number) => <Tile tileNumber={tileNumber} />

  function winnerString(): string {
    const winnerPlayerId: string = game.gameState.winnerPlayerId;
    if (winnerPlayerId === '') {
      if (game.status === GameStatus.Completed) {
        return 'Draw!!!';
      }
      return '';
    }

    if (winnerPlayerId === game.currentUserPlayerId) {
      return 'You Won!!!';
    }

    const winner = game.players.find(x => x.playerId === winnerPlayerId)

    if (winner === undefined) {
      return '';
    }

    return winner.playerAlias + ' Won!!!';
  }

  function currentTurnString(): string {
    if (game.status === GameStatus.Completed) {
      return '';
    }

    const currentTurnPlayerId: string = game.gameState.currentTurnPlayerId;

    if (game.currentUserPlayerId === currentTurnPlayerId) {
      return 'Your turn'
    }

    const currentTurnPlayer = game.players.find(x => x.playerId === currentTurnPlayerId)

    if (currentTurnPlayer === undefined) {
      return '';
    }

    return currentTurnPlayer.playerAlias + '\'s turn';
  }

  function renderStatusBanner() {
    const s = winnerString();
    if (s !== '') {
      return s;
    }

    return currentTurnString();
  }

  return (
    <div>
      <h1 className="status">{game.gameName}</h1>
      <h2>{renderStatusBanner()}</h2>
      <div className="board-row">
        {renderTile(0)}
        {renderTile(1)}
        {renderTile(2)}
      </div>
      <div className="board-row">
        {renderTile(3)}
        {renderTile(4)}
        {renderTile(5)}
      </div>
      <div className="board-row">
        {renderTile(6)}
        {renderTile(7)}
        {renderTile(8)}
      </div>
    </div>
  );
}
