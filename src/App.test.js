import React from 'react';
import { shallow } from 'enzyme';
import { testStore, findByTestAttr } from '../Utils';
import App from './App';

const setUp = (inisialState = {}) => {
  const store = testStore(inisialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title 1',
          body: 'Some text 1'
        },

        {
          title: 'Example title 2',
          body: 'Some text 2'
        },

        {
          title: 'Example title 3',
          body: 'Some text 3'
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
