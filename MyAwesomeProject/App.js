/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainRoute from './routes';
import {ChangeColorProvider} from './sixth_assignment/contexts/changeColor';
import { ChangeUserProvider } from './sixth_assignment/contexts/providers';
import {Provider} from 'react-redux';
import { store } from './seventh_assignment/redux/store';
import { wishlistStore } from './seventh_assignment/redux/store/wishliststore';

const App = () => {
  return (
    <Provider store={store}>
    <ChangeUserProvider>
    <ChangeColorProvider>
      <MainRoute />
    </ChangeColorProvider>
    </ChangeUserProvider>
    </Provider>
  );
};

export default App;
