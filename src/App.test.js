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

  it('updateState method should update state as expected', () => {
    const classInstant = wrapper.instance();
    classInstant.updateState();
    const newState = classInstant.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('returnValue method should return value as expected', () => {
    const classInstant = wrapper.instance();
    const newValue = classInstant.returnValue(100);
    expect(newValue).toBe(101);
  });
});
