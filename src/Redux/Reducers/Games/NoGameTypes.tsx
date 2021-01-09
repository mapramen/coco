import { GameName, GameStatus, IGame } from './GameTypes';

const initialGame: IGame<GameName> = {
  gameId: '',
  gameName: GameName.None,
  stateId: '',
  status: GameStatus.None,
  currentUserPlayerId: '',
  players: [],
  teams: [],
  gameState: {},
  events: []
}

export default initialGame;