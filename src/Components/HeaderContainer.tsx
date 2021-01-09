import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGameId } from '../Redux/Reducers/GameReducer';
import { setUserAlias, setUserId } from '../Redux/Reducers/UserReducer';

export default function HeadingContainer() {
  const [mockUserId, setMockUserId] = useState('');
  const [mockUserAlias, setMockUserAlias] = useState('');
  const [mockGameId, setMockGameId] = useState('');
  const dispatch = useDispatch()

  function handleUserIdChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setMockUserId(e.target.value);
  }

  function handleGameIdChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setMockGameId(e.target.value);
  }

  function handleUserAliasChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setMockUserAlias(e.target.value);
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    
    dispatch(setUserId(mockUserId));
    dispatch(setUserAlias(mockUserAlias));
    dispatch(setGameId(mockGameId));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserID: <input type="text" value={mockUserId} onChange={handleUserIdChange} />
      </label>
      <label>
        Alias: <input type="text" value={mockUserAlias} onChange={handleUserAliasChange} />
      </label>
      <label>
        GameID: <input type="text" value={mockGameId} onChange={handleGameIdChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>);
}
