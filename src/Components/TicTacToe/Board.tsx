import { useSelector } from "react-redux";
import React from 'react';
import './Game.css';
import Tile from './Tile';
import { RootState } from "../../Redux/Reducers";

export default function Board() {
	const clickedTileNumber: number = useSelector((state: RootState) => state.tictactoe.clickedSquareNumber);
	const winner: string = useSelector((state: RootState) => state.tictactoe.winner);
	const xIsNext: boolean = useSelector((state: RootState) => state.tictactoe.xIsNext);

	let status;
	if (winner !== "") {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}

	const renderTile = (tileNumber: number) => <Tile tileNumber={tileNumber} />

	return (
		<div>
			<h1 className="status">{status}</h1>
			<h1>Player Clicked: {clickedTileNumber}</h1>
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
