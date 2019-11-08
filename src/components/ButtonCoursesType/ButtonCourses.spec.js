import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';
import { ButtonCoursesType as Component } from './index.js';

configure({ adapter: new Adapter() });

describe('component snapshot', () => {
  it('capturing snapshot of buttons', () => {
    const renderedValue = renderer.create(<Component clickButton={() => {}} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('Shallow render comonent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Component />);
  });

  it('check count Buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(4);
  });
});
