export type WishlistContextInfo = {
    id:string;
    rate: string;
    title:string;
    price:string;
    image:string
  };
  
  export type wishlistState = {
    wishlistInfo?: WishlistContextInfo;
  };
  