import { ITicTacToeGame, ITicTacToePlayer, ITicTacToeState } from "../Games/TicTacToe/Types";
import { RootState } from "../Reducers/RootReducer";
import { getPlayer } from "./GameSelector";

export function selectTileValue(state: RootState, tileNumber: number): string {
  return (state.game.gameState as ITicTacToeState).tiles[tileNumber];
}

export function getCurrentTurnPlayer(game: ITicTacToeGame): ITicTacToePlayer {
  return getPlayer<ITicTacToePlayer>(game, game.gameState.currentTurnPlayerId);
}

export function getWinner(game: ITicTacToeGame): ITicTacToePlayer {
  return getPlayer<ITicTacToePlayer>(game, game.gameState.winnerPlayerId);
}