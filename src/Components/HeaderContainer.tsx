import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMockUser } from '../Redux/actions';

export default function HeadingContainer() {
  const [userId, setUserId] = useState('');
  const [gameId, setGameId] = useState('');
  const [userAlias, setUserAlias] = useState('');
  const dispatch = useDispatch()

  function handleUserIdChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setUserId(e.target.value);
  }

  function handleGameIdChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setGameId(e.target.value);
  }

  function handleUserAliasChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setUserAlias(e.target.value);
  }

  function handleSubmit() {
    dispatch(setMockUser(userId, userAlias, gameId));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserID: <input type="text" value={userId} onChange={handleUserIdChange} />
      </label>
      <label>
        Alias: <input type="text" value={userAlias} onChange={handleUserAliasChange} />
      </label>
      <label>
        GameID: <input type="text" value={gameId} onChange={handleGameIdChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>);
}
