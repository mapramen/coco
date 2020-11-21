import { connect } from "react-redux";
import React from 'react';
import '../GameApp.css';
import Square from './Square';
import { RootState } from "../Redux/Reducers";

interface IBoardState {
    xIsNext: boolean,
    squares: Array<string>,
}

interface IBoardStateProps {
    clickedSquareNumber: number,
    squares: Array<string>,
    xIsNext: boolean,
    winner: string
}

interface IBoardDispatchProps {

}

interface IBoardOwnProps {
    
}

const mapStateToProps = (state: RootState): IBoardStateProps => ({
    clickedSquareNumber: state.tictactoe.clickedSquareNumber,
    squares: state.tictactoe.squares,
    xIsNext: state.tictactoe.xIsNext,
    winner: state.tictactoe.winner
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

    renderSquare(i: number) {
        return (
            <Square
                squareNumber = {i}
                value={this.props.squares[i]}
            />
        );
    }

    render() {
        let status;
        if (this.props.winner !== "") {
            status = 'Winner: ' + this.props.winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <h1 className="status">{status}</h1>
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

export default connect<
    IBoardStateProps,
    IBoardDispatchProps,
    IBoardOwnProps,
    RootState>(mapStateToProps)(Board)