import { GameName, GameStatus, IGame, IGamePlayer } from "../Games/GameTypes";
import { RootState } from "../Reducers/RootReducer";

export function selectGameName(state: RootState): GameName {
  return state.game.gameName;
}

export function selectGameStatus(state: RootState): GameStatus {
  return state.game.status;
}

export function selectGame<T extends IGame>(state: RootState): T {
  return state.game as T;
}

export function selectPlayer<T extends IGamePlayer>(state: RootState, playerId: string): T {
  return getPlayer<T>(state.game, playerId);
}

export function getPlayer<T extends IGamePlayer>(game: IGame, playerId: string): T {
  const player = game.players.find(x => x.playerId === playerId);

  if (player === undefined) {
    throw new Error('Player not found');
  }

  return player as T;
}