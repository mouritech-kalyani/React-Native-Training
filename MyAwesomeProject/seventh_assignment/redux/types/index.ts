export type userContextInfo = {
    username: string;
    password:string
  };
  
  export type userState = {
    usersInfo?: userContextInfo;
  };
  export type AxiosProps = {
    type: any;
    url: any;
    params?: any;
    header?: any;
  };
  
  export type AllProductResponse = {};
  
  export type AllProductResponseError = {
    error: string;
  };
  export type AllProductInfo = {
    isLoading: boolean;
    allProductResponse?: AllProductResponse;
    allProductResponseError?: AllProductResponseError;
  };
  
  export type ProductRequestPayload = {
    id: number;
  };
  
  export type ProductResponse = {};
  
  export type ProductResponseError = {
    error: string;
  };
  export type ProductInfo = {
    productRequestPayload?: ProductRequestPayload;
    isLoading: boolean;
    productResponse?: ProductResponse;
    productResponseError?: ProductResponseError;
  };
   
  export type ValidateUserRequestPayload ={
    email:string,
    password:string
  }
  export type ValidateUserResponse = {
    token : string
  };
  
  export type ValidateUserError = {
    error: string;
  };
  export type ValidateUserInfo = {
    validateUserRequestPayload?: ValidateUserRequestPayload;
    isLoading: boolean;
    validateUserResponse?: ValidateUserResponse;
    validateUserError?: ValidateUserError;
  };