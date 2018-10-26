import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders text "React App"', () => {
    const AppWrapper = shallow(<App />);

    expect(AppWrapper.text()).toEqual('React App');
  });
});
