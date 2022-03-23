import React from 'react';
import {View, Text} from 'react-native';
import LoginScreenSeventh from './Login';
import {selectUserInfo} from './redux/slice';
import {currentUser} from './redux/slice';
import {useAppDispatch, useAppSelector} from './redux/hooks';
import HomeSeven from './Home';

const SeventhAssignment = ({navigation}) => {
  const usersInfo = useAppSelector(selectUserInfo);
  const username = usersInfo?.username;
  const password = usersInfo?.password;
  console.log(username, password);

  return (
    <>
      {(username === '' || username === undefined) &&
      (password === '' || password === undefined) ? (
        <LoginScreenSeventh />
      ) : (
        <HomeSeven navigation={navigation}/>
      )}
    </>
  );
};

export default SeventhAssignment;
