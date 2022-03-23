import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import {Provider} from 'react-redux';
import {store} from '../seventh_assignment/redux/store';
import TestingLogin from '../Testing/Login';

describe('Testing render method of log in', () => {
  test('Check to see if component is rendering', () => {
    const component = (
      <Provider store={store}>
        <TestingLogin />
       </Provider>
    );
    const wrapper = render(component);
    expect(wrapper).toBeTruthy();
   // expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Check if test id is present or not', () => {
    const component = (
      <Provider store={store}>
        <TestingLogin />
      </Provider>
    );
    const wrapper = render(component);
    expect(wrapper.getByTestId('username')).toBeTruthy();
    expect(wrapper.getByTestId('password')).toBeTruthy();
    expect(wrapper.getByTestId('login')).toBeTruthy();
  });
  test('Check input is correct or not', () => {
    const component = (
      <Provider store={store}>
        <TestingLogin />
      </Provider>
    );
    const wrapper = render(component);
    const name = 'Kalyani';
    const password = 89898988;
    const usernameTestId = wrapper.getByTestId('username');
    fireEvent.changeText(usernameTestId, name);
    const uInputs = usernameTestId.props.value;
    expect(uInputs).toHaveLength(7);
    expect(typeof uInputs).toBe('string');

    const passwordTestId = wrapper.getByTestId('password');
    fireEvent.changeText(passwordTestId, password);
    const inputs = passwordTestId.props.value;
    console.log('>>>>>>>data', inputs);
    expect(typeof inputs).toBe('number');
  }),
    test('Check placeholders are correct or not', () => {
      const component = (
        <Provider store={store}>
          <TestingLogin />
        </Provider>
      );
      const wrapper = render(component);
      const testId = wrapper.getByTestId('username');
      const getPlaceholderText = testId.props.placeholder;
      expect(getPlaceholderText).toBe('Enter Username');
    });
});
