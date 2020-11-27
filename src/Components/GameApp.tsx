import React from 'react';
import './GameApp.css';
import Board from './Board'

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


