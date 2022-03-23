import {call, put, SagaReturnType, takeLatest} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import { AxiosProps, ProductRequestPayload } from '../../../../seventh_assignment/redux/types';
import {AxiosResponse} from 'axios';
import {productsError, productsSuccess, callProduct} from '../slice';
import { requestApi } from '../../../config/axios';
function* products(
  action: PayloadAction<ProductRequestPayload>,
): SagaReturnType<any> {
  try {
    const productPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'GET',
      url: `products/${productPayload.id}`,
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data, status} = response;
    console.log('data >>>>>', data);
    if (data) {
      yield put(productsSuccess({productData: response.data}));
    } else {
      yield put(productsError({error: response.data}));
    }
  } catch (error) {
    yield put(productsError({error: 'Server Error'}));
  }
}

export default function* watchProductRequest() {
  yield takeLatest(callProduct, products);
}
