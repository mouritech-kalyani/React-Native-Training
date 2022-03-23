import {configureStore} from '@reduxjs/toolkit';
import wishlistReducer from '../slice/wishlistslice';

export const wishlistStore = configureStore({
  reducer: {
    wishlists: wishlistReducer,
  },
});
export type WishlistAppDispatch = typeof wishlistStore.dispatch;
export type WishlistRootState = ReturnType<typeof wishlistStore.getState>;
