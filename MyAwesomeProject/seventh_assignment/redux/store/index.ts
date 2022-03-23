import {configureStore, Middleware, MiddlewareArray} from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import createSagaMiddleware from 'redux-saga';
import allProductsReducer from '../../../eight_assignment/Product/All_Products/slice';
import rootSaga from '../saga';
import productsReducer from '../../../eight_assignment/Product/Product_Details/slice';
import userReducer from '../slice';
import wishlistReducer from '../slice/wishlistslice';
import validateUserReducer from '../../../Testing/Slice';
const sagaMiddleware = createSagaMiddleware();
// for saga
const middlewares: Middleware[] = [sagaMiddleware];
if (__DEV__) {
  const reduxDebugger = createDebugger();
  middlewares.push(reduxDebugger);
}
export const store = configureStore({
  reducer: {
    users: userReducer,
    wishlists: wishlistReducer,
    allProducts: allProductsReducer,
    products: productsReducer,
    validateUser: validateUserReducer
  },
  middleware: new MiddlewareArray().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',

});
// for saga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
