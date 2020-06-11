import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { checkProps, findByTestAttr } from '../../../Utils';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example title',
        desc: 'Example desc'
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: 'Example title',
        desc: 'Example desc'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('should NOT render', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        desc: 'Example desc'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component is NOT rendered', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
