import { RootState } from '../../seventh_assignment/redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
  import { ValidateUserResponse,ValidateUserError,ValidateUserRequestPayload,ValidateUserInfo } from '../../seventh_assignment/redux/types';
export const initialState: ValidateUserInfo = {
  validateUserRequestPayload: undefined,
  isLoading: false,
  validateUserResponse: undefined,
  validateUserError: undefined,
};

export const validateUserSlice = createSlice({
  name: 'validateUser',
  initialState,
  reducers: {
    callValidateUser: (state, action: PayloadAction<ValidateUserRequestPayload>) => {
      state.validateUserRequestPayload = action.payload;
      state.isLoading = true;
    },
    validateUserSuccess: (state, action: PayloadAction<ValidateUserResponse>) => {
      state.validateUserResponse = action.payload;
      state.isLoading = false;
    },
    validateUserError: (state, action: PayloadAction<ValidateUserError>) => {
      state.validateUserError = action.payload;
      state.validateUserResponse = undefined;
      state.isLoading = false;
    },
  },
});

export const {callValidateUser, validateUserSuccess, validateUserError} =
validateUserSlice.actions;

// export const selectProductsInfo = (state: RootState) => state.products;
export const ValidateUserAuthInfo = (state: RootState) => state.validateUser;

const validateUserReducer = validateUserSlice.reducer;
export default validateUserReducer;
