import React, {useState, useCallback, useMemo} from 'react';
import {UserContextManager} from '../types'

//any functional component will replace by this children
interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export interface UserManager {
  userInfo: UserContextManager | null;
  updateUserInfo: (userData: UserContextManager) => void;
}

//global access for context

const ChangeUserContext = React.createContext<UserManager>({
  userInfo: null,
  updateUserInfo: (): void => {},
});

export const useUserContext = (): UserManager => React.useContext(ChangeUserContext);

//write provider to set values using usestate and usememo

const ChangeUserProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<UserContextManager | null>(null);

  //define type for this function to set current values
  const updateUserInfo = useCallback((userData: UserContextManager) => {
    setUserInfo(userData);
  }, []);

  //to take latest values from the memory cache
  const authManager = useMemo((): UserManager => {
    return {
      userInfo: userInfo,
      updateUserInfo,
    };
  }, [updateUserInfo, userInfo]);

  //returning provider which will pass current state to whole components
  return (
    <ChangeUserContext.Provider value={authManager}>{children}</ChangeUserContext.Provider>
  );
};


export {ChangeUserProvider, ChangeUserContext};
