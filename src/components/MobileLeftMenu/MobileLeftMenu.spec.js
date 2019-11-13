import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import { MobileLeftMenu as Component } from './index';

configure({ adapter: new Adapter() });

const initialState = { languageState: { language: 'EN' } };

describe('component snapshot', function() {
  it('capturing snapshot of Footer', () => {
    const renderedValue = renderer.create(<Component languageState={initialState.languageState} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('test dump component', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Component languageState={initialState.languageState} />);
  });

  it('render the dumb component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('check change props', () => {
    wrapper.setProps({ show: true });
    expect(wrapper.find('.mobile-menu__overlay_show')).toHaveLength(1);
  });
});
