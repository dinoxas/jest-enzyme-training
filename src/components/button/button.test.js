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

  beforeEach(() => {
    const props = {
      buttonText: 'Example Button Text',
      emitEvent: () => {}
    };
    wrapper = shallow(<SharedButton {...props} />);
  });

  it('should render a button', () => {
    const button = findByTestAttr(wrapper, 'sharedButtonComponent');
    expect(button.length).toBe(1);
  });
});
