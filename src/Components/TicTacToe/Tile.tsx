import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Game.css';
import { RootState } from '../../Reducers/RootReducer';
import { IMarkTileAction, ITicTacToeGame, ITicTacToePlayerAction, TicTacToePlayerActionName } from '../../Games/TicTacToeGameTypes';
import { sendPlayerAction } from '../../Reducers/GameReducer';

interface ITileProps {
  tileNumber: number
}

export default function Tile(tileProps: ITileProps) {
  const game: ITicTacToeGame = useSelector((state: RootState) => state.game as ITicTacToeGame);
  const winner: string = game.gameState.winnerPlayerId;
  const tileValue = game.gameState.tiles[tileProps.tileNumber]

  const dispatch = useDispatch();

  const handleTileClick = () => {
    if (tileValue || winner || game.currentUserPlayerId !== game.gameState.currentTurnPlayerId) {
      return;
    }

    const markTileAction: IMarkTileAction = {
      GameId: game.gameId,
      ActionName: TicTacToePlayerActionName.MarkTile,
      PlayerId: game.currentUserPlayerId,
      TileNumber: tileProps.tileNumber
    };

    dispatch(sendPlayerAction(markTileAction))
  }

  return (
    <button className="square" onClick={() => handleTileClick()}>
      {tileValue}
    </button>
  );
}
