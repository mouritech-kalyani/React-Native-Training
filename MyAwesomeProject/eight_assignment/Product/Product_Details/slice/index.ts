import {RootState} from '../../../../../MyReduxProject/src/redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ProductRequestPayload ,ProductInfo,
  ProductResponse,
  ProductResponseError,} from '../../../../seventh_assignment/redux/types';
export const initialState: ProductInfo = {
  productRequestPayload: undefined,
  isLoading: false,
  productResponse: undefined,
  productResponseError: undefined,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    callProduct: (state, action: PayloadAction<ProductRequestPayload>) => {
      state.productRequestPayload = action.payload;
      state.isLoading = true;
    },
    productsSuccess: (state, action: PayloadAction<ProductResponse>) => {
      state.productResponse = action.payload;
      state.isLoading = false;
    },
    productsError: (state, action: PayloadAction<ProductResponseError>) => {
      state.productResponseError = action.payload;
      state.isLoading = false;
    },
  },
});

export const {callProduct, productsSuccess, productsError} =
  productsSlice.actions;

export const selectProductsInfo = (state: RootState) => state.products;

const productsReducer = productsSlice.reducer;
export default productsReducer;
