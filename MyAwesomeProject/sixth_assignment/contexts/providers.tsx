import React, {useState, useCallback, useMemo} from 'react';
import {UserContextManager} from '../types'

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export interface UserManager {
  userInfo: UserContextManager | null;
  updateUserInfo: (userData: UserContextManager) => void;
}

const ChangeUserContext = React.createContext<UserManager>({
  userInfo: null,
  updateUserInfo: (): void => {},
});

export const useUserContext = (): UserManager => React.useContext(ChangeUserContext);

const ChangeUserProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<UserContextManager | null>(null);

  const updateUserInfo = useCallback((userData: UserContextManager) => {
    setUserInfo(userData);
  }, []);

  const authManager = useMemo((): UserManager => {
    return {
      userInfo: userInfo,
      updateUserInfo,
    };
  }, [updateUserInfo, userInfo]);

  return (
    <ChangeUserContext.Provider value={authManager}>{children}</ChangeUserContext.Provider>
  );
};


export {ChangeUserProvider, ChangeUserContext};
