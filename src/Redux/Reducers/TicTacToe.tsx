import { IAction, IMockUserPayload, IPlayMovePayload, MOCK_USER, PLAY_MOVE } from "../actionTypes";

interface ITicTacToeState {
  gameId: string,
  clickedSquareNumber: number,
  squares: Array<string>,
  xIsNext: boolean,
  winner: string
}

const initialState: ITicTacToeState = {
  gameId: "",
  clickedSquareNumber: -1,
  squares: Array<string>(9),
  xIsNext: true,
  winner: ""
}

function calculateWinner(squares: Array<string>) {
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

function TicTacToeReducer(state = initialState, action: IAction): ITicTacToeState {
  switch (action.type) {
    case PLAY_MOVE: {
      const squareNumber: number = (action.payload as IPlayMovePayload).squareNumber;
      if (state.squares[squareNumber] || state.winner !== "") {
        return state;
      }
      const squares = state.squares.slice();
      squares[squareNumber] = state.xIsNext ? 'X' : 'O';
      return {
        gameId: state.gameId,
        clickedSquareNumber: squareNumber,
        squares: squares,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(squares)
      };
    }
    case MOCK_USER: {
      const gameId: string = (action.payload as IMockUserPayload).gameId;
      return {
        gameId: gameId,
        clickedSquareNumber: state.clickedSquareNumber,
        squares: state.squares,
        xIsNext: state.xIsNext,
        winner: state.winner
      };
    }
    default:
      return state;
  }
}

export default TicTacToeReducer;
