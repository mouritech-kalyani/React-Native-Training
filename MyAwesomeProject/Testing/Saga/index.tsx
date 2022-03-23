import { requestApi } from '../config/axios';
import {call, put, SagaReturnType, takeLatest} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import { validateUserError,callValidateUser,validateUserSuccess } from '../Slice';
import { AxiosProps,ValidateUserRequestPayload } from '../../seventh_assignment/redux/types';
function* authUserSaga(
  action: PayloadAction<ValidateUserRequestPayload>,
): SagaReturnType<any> {
  try {
    const productPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'POST',
      url: 'login',
      params : productPayload
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data, status} = response;
    if (status === 200) {
      yield put(validateUserSuccess(response.data));
    } else {
      yield put(validateUserError({error: response.data}));
    }
  } catch (error) {
    yield put(validateUserError({error: 'Server Error'}));
  }
}

export default function* watchAuthUserRequest() {
  yield takeLatest(callValidateUser, authUserSaga);
}
