import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'components/Button';
import { ButtonCoursesType as Component } from './index.js';

configure({ adapter: new Adapter() });

describe('component snapshot', () => {
  it('capturing snapshot of buttons', () => {
    const renderedValue = renderer.create(<Component clickButton={() => {}} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('Shallow render component', () => {
  let wrapper;

  const initialState = {
    active: 0,
  };

  beforeEach(() => {
    wrapper = shallow(<Component />);
  });

  it('check count Buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(4);
  });

  it('check initial state', () => {
    expect(wrapper.state()).toEqual(initialState);
  });

  it('check change state', () => {
    const newState = { active: 1 };
    wrapper.setState(newState);
    expect(wrapper.state()).toEqual(newState);
  });

  it('check setActiveCategory function', () => {
    wrapper.instance().stateBtn(1);
    expect(wrapper.state()).toEqual({ active: 1 });
  });
});
