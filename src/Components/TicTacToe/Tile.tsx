import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Game.css';
import { RootState } from '../../Reducers/RootReducer';
import { selectTileValue } from '../../Selectors/TicTacToeSelector';
import { Button } from '@fluentui/react-northstar';
import { selectGameStatus } from '../../Selectors/GameSelector';
import { GameStatus } from '../../Games/GameTypes';
import { markTileAction } from '../../Reducers/Games/TicTacToeReducer';

interface ITileProps {
  tileNumber: number
}

export default function Tile(tileProps: ITileProps) {
  const { tileNumber } = tileProps;
  const status = useSelector((state: RootState) => selectGameStatus(state))
  const tileValue = useSelector((state: RootState) => selectTileValue(state, tileNumber));
  const dispatch = useDispatch();

  const handleTileClick = () => {
    if (status !== GameStatus.InProgress || tileValue) {
      return;
    }

    dispatch(markTileAction(tileNumber))
  }

  return <Button
    content={tileValue}
    iconOnly
    key={tileNumber}
    onClick={() => handleTileClick()} />;
}
