import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Game.css';
import { playMove } from '../../Redux/actions';
import { RootState } from '../../Redux/Reducers';

interface ITileProps {
  tileNumber: number
}

function selectTile(state: RootState, tileNumber: number): string {
  return state.tictactoe.squares[tileNumber];
}

export default function Tile(tileProps: ITileProps) {
  const winner: string = useSelector((state: RootState) => state.tictactoe.winner);
  const tileValue = useSelector((state: RootState) => selectTile(state, tileProps.tileNumber));

  const dispatch = useDispatch();

  const handleTileClick = () => {
    if (!tileValue && !winner) {
      dispatch(playMove(tileProps.tileNumber))
    }
  }

  return (
    <button className="square" onClick={() => handleTileClick()}>
      {tileValue}
    </button>
  );
}
