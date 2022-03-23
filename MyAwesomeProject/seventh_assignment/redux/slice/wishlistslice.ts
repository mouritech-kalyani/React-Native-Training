import { wishlistState } from './../types/wishlisttype';
import { WishlistRootState } from './../store/wishliststore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState: wishlistState = {
    wishlistInfo: undefined,
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    currentWishlist: (state, action: PayloadAction<wishlistState>) => {
      state.wishlistInfo = action.payload.wishlistInfo;
    },
  },
});

export const {currentWishlist} = wishlistSlice.actions;
export const selectWishlistInfo = (state: WishlistRootState) =>
  state.wishlists.wishlistInfo

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;
