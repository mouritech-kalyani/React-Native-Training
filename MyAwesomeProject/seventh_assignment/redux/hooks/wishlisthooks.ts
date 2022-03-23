import { WishlistRootState, WishlistAppDispatch } from './../store/wishliststore';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useWishlistDispatch = () => useDispatch<WishlistAppDispatch>();
export const useWishlistSelector: TypedUseSelectorHook<WishlistRootState> = useSelector;
