import {all, fork} from 'redux-saga/effects';
import watchProductRequest from '../../../eight_assignment/Product/Product_Details/saga';
import watchAllProductRequest from '../../../eight_assignment/Product/All_Products/saga';
import watchAuthUserRequest from '../../../Testing/Saga';
export default function* rootSaga() {
  // yield all([fork(watchAuthRequest)]);
  yield all([fork(watchAllProductRequest), fork(watchProductRequest), fork(watchAuthUserRequest)]);
  // yield all([fork(watchProductRequest)]);
}
