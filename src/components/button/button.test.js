import React from 'react';
import { shallow } from 'enzyme';
import SharedButton from './index';
import { checkProps, findByTestAttr } from '../../../Utils';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {}
      };

      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});

describe('Renders', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    const props = {
      buttonText: 'Example Button Text',
      emitEvent: mockFn
    };
    wrapper = shallow(<SharedButton {...props} />);
  });

  it('should render a button', () => {
    const button = findByTestAttr(wrapper, 'sharedButtonComponent');
    expect(button.length).toBe(1);
  });

  it('should emit callback on click event', () => {
    const button = findByTestAttr(wrapper, 'sharedButtonComponent');
    button.simulate('click');
    const callback = mockFn.mock.calls.length;
    console.log(mockFn.mock.calls);
    expect(callback).toBe(1);
  });
});
