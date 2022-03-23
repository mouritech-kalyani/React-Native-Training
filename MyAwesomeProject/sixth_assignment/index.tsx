import React from 'react';
import {useUserContext} from './contexts/providers';
import Welcome from './Home';
import LoginScreen from './Login';

export default function Page({navigation}) {
  const {userInfo} = useUserContext();
  return (
    <>
      { userInfo != null &&
      (userInfo.username !== '' && userInfo?.username != null) &&
      userInfo.password !== '' && userInfo?.password != null? (
     <Welcome />
        ) : (
    <LoginScreen/>
    )}
    </>
  );
}
