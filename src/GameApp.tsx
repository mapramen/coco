import React from 'react';
import ReactDOM from 'react-dom';
import './GameApp.css';
import Board from './Components/Board'

export default class GameApp extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
};


