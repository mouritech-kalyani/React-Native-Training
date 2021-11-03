/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import MainRoute from './routes';
import {ChangeColorProvider} from './sixth_assignment/contexts/changeColor';
import { ChangeUserProvider } from './sixth_assignment/contexts/providers';
const App = () => {
  return (
    <ChangeUserProvider>
    <ChangeColorProvider>
      <MainRoute />
    </ChangeColorProvider>
    </ChangeUserProvider>
  );
};

export default App;
