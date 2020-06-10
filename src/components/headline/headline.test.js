import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from '../../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: 'Test header prop',
        desc: 'Test desc prop'
      };
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render a H1', () => {
      const hOne = findByTestAttr(wrapper, 'header');
      expect(hOne.length).toBe(1);
    });

    it('should render a description', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should NOT render', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
