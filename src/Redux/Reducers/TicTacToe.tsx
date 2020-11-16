import { IAction, PLAY_MOVE } from "../actionTypes";


interface ITicTacToeState {
    clickedSquareNumber: number,
    squares: Array<string>,
    xIsNext: boolean,
    winner: string
}

const initialState: ITicTacToeState = {
    clickedSquareNumber: -1,
    squares: Array<string>(9),
    xIsNext: true,
    winner: ""
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
    return "";
}

export default function (state = initialState, action: IAction): ITicTacToeState {
    switch (action.type) {
        case PLAY_MOVE: {
            if(state.squares[action.payload.squareNumber] != null || state.winner != "") {
                return state;
            }
            const squares = state.squares.slice();
            squares[action.payload.squareNumber] = state.xIsNext ? 'X' : 'O';
            return {
                clickedSquareNumber: action.payload.squareNumber,
                squares: squares,
                xIsNext: !state.xIsNext,
                winner: calculateWinner(squares)
            };
        }
        default:
            return state;
    }
}