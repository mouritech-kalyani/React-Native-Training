import {RootState} from '../../../../../MyReduxProject/src/redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  AllProductResponse,
  AllProductResponseError,
  AllProductInfo,
} from '../../../../../MyReduxProject/src/redux/type';

export const initialState: AllProductInfo = {
  isLoading: false,
  allProductResponse: undefined,
  allProductResponseError: undefined,
};

export const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    callAllProduct: state => {
      state.isLoading = true;
    },
    allProductsSuccess: (state, action: PayloadAction<AllProductResponse>) => {
      state.allProductResponse = action.payload;
      state.isLoading = false;
    },
    allProductsError: (
      state,
      action: PayloadAction<AllProductResponseError>,
    ) => {
      state.allProductResponseError = action.payload;
      state.isLoading = false;
    },
  },
});

export const {callAllProduct, allProductsSuccess, allProductsError} =
  allProductsSlice.actions;

export const selectAllProductsInfo = (state: RootState) => state.allProducts;

const allProductsReducer = allProductsSlice.reducer;
export default allProductsReducer;
