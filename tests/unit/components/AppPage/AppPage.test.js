import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import toJson from 'enzyme-to-json';

import AppPage from '../../../../src/components/AppPage/AppPage';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('AppPage Conponent Tests', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<AppPage />);
    });

    xit('Verifies that Search returns a div that renders a div and and InputBase component', () => {
      expect(wrapper.type()).toEqual('div');
      // expect(wrapper.contains(<InputBase />));
      // expect(wrapper.contains(<div />));
    });

    xit("Verifies that the AppPage component has a className 'appPage'", () => {
      expect(wrapper.hasClass('appPage'));
    });
  });
});
