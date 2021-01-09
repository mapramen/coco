import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  userId: string,
  userAlias: string
}

const initialState: IUserState = {
  userId: '',
  userAlias: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    setUserAlias(state, action: PayloadAction<string>){
      state.userAlias = action.payload;
    }
  }
});

export const { setUserId, setUserAlias } = userSlice.actions;

export default userSlice.reducer;
