import produce from "immer";
import { GameName, GameStatus, IGame, IGameEvent } from "./Games/GameTypes";
import initialState, { INewPlayerEvent, INextPlayerTurnEvent, IPlayerWonEvent, ITicTacToeEvent, ITicTacToeGame, ITicTacToePlayer, ITileMarkedEvent, TicTacToeGameEventName } from "./Games/TicTacToeGameTypes";

export default function TicTacToeReducer(baseState: IGame<GameName>, event: IGameEvent<GameName>): IGame<GameName> {
  if (baseState.gameId !== event.GameId) {
    return baseState;
  }

  if (event.EventName === TicTacToeGameEventName.GameCreated) {
    baseState = initialState
  }

  const newState = produce(baseState as ITicTacToeGame, game => {
    switch (event.EventName) {
      case TicTacToeGameEventName.GameCreated:
        {
          game.status = GameStatus.Created;
        }
        break;
      case TicTacToeGameEventName.GameStarted:
        {
          game.status = GameStatus.Started;
        }
        break;
      case TicTacToeGameEventName.NewPlayer:
        {
          const newPlayerEvent: INewPlayerEvent = event as INewPlayerEvent;
          const newPlayer: ITicTacToePlayer = {
            playerId: newPlayerEvent.PlayerId,
            playerAlias: newPlayerEvent.PlayerAlias,
            tileMark: newPlayerEvent.TileMark
          };
          game.players.push(newPlayer);
        }
        break;
      case TicTacToeGameEventName.NextPlayerTurn:
        {
          game.gameState.currentTurnPlayerId = (event as INextPlayerTurnEvent).PlayerId;
        }
        break;
      case TicTacToeGameEventName.TileMarked:
        {
          const tileMarkedEvent: ITileMarkedEvent = event as ITileMarkedEvent;
          game.gameState.tiles[tileMarkedEvent.TileNumber] = tileMarkedEvent.TileMark;
        }
        break;
      case TicTacToeGameEventName.PlayerWon:
        {
          game.status = GameStatus.Completed;
          game.gameState.winnerPlayerId = (event as IPlayerWonEvent).PlayerId;
        }
        break;
      case TicTacToeGameEventName.GameDraw:
        {
          game.status = GameStatus.Completed;
        }
        break;
      default:
        break;
    }

    game.stateId = event.EventId;
    game.events.push(event as ITicTacToeEvent);
  });

  return newState;
}