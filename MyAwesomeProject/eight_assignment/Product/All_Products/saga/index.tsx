import {call, put, SagaReturnType, takeLatest} from '@redux-saga/core/effects';
// import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import { requestApi } from '../../../config/axios';
import {allProductsError, allProductsSuccess, callAllProduct} from '../slice';
import { AxiosProps } from '../../../../seventh_assignment/redux/types';
function* allProducts(): SagaReturnType<any> {
  try {
    const requestParams: AxiosProps = {
      type: 'GET',
      url: 'products',
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data, status} = response;

    if (data) {
      yield put(allProductsSuccess({productList: response.data}));
    } else {
      yield put(allProductsError({error: response.data}));
    }
  } catch (error) {
    yield put(allProductsError({error: 'Server Error'}));
  }
}

export default function* watchAllProductRequest() {
  yield takeLatest(callAllProduct, allProducts);
}
