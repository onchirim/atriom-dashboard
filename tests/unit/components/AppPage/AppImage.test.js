import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import toJson from 'enzyme-to-json';

import AppImage from '../../../../src/components/AppPage/AppImage';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('AppImage component tests', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<AppImage />);
    });

    it('Renders a <div> tag', () => {
      expect(wrapper.type()).toEqual('div');
    });
  });
});
