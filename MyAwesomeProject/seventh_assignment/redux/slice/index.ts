import {userState} from '../types';
import {RootState} from '../store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState: userState = {
  usersInfo: undefined,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    currentUser: (state, action: PayloadAction<userState>) => {
      state.usersInfo = action.payload.usersInfo;
    },
  },
});

export const {currentUser} = userSlice.actions;
export const selectUserInfo = (state: RootState) =>
  state.users.usersInfo;

const userReducer = userSlice.reducer;
export default userReducer;
