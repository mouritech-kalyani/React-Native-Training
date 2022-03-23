import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import DummyPage from '../Testing/DummyPage';

describe('Testing render method of log in', () => {
  
    jest.mock('@react-navigation/native',()=>({
      ...jest.requireActual('2react-navigation/native'),
      useRoute:()=>({
        name:"kalyani"
      })
    }))

    test('Check to see if component is rendering', () => {
      const mockParams = {
        route:{params:{name:"kalyani"}},
        navigation:''
      }
    const component = (
      <DummyPage {...mockParams}/>
     );
     const wrapper = render(component);
     expect(wrapper).toBeTruthy();
     const paramName = wrapper.getByTestId('paramName');
     const propValue = paramName.children[0]
    expect(propValue).toMatch("kalyani");
     //expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
});
