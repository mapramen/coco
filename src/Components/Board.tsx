import { connect } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import '../GameApp.css';
import Square from './Square';
import { RootState } from "../Redux/Reducers";

interface IBoardState {
    xIsNext: boolean,
    squares: Array<string>,
}

interface IBoardStateProps {
    clickedSquareNumber: number
}

interface IBoardDispatchProps {

}

interface IBoardOwnProps {
    
}

const mapStateToProps = (state: RootState): IBoardStateProps => ({
    clickedSquareNumber: state.tictactoe.clickedSquareNumber
})

type IBoardProps = IBoardStateProps & IBoardDispatchProps & IBoardOwnProps;

class Board extends React.Component<IBoardProps, IBoardState> {
    constructor(props : IBoardProps) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i: number) {
        return (
            <Square
                squareNumber = {i}
                value={this.state.squares[i]}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <h1>Player Clicked: {this.props.clickedSquareNumber}</h1>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares : Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default connect<
    IBoardStateProps,
    IBoardDispatchProps,
    IBoardOwnProps,
    RootState>(mapStateToProps)(Board)