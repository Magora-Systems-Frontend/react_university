import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Component from './index';

configure({ adapter: new Adapter() });

describe('component snapshot', () => {
  it('capturing snapshot of dropdown', () => {
    const renderedValue = renderer.create(<Component displayBubble={true} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('Shallow render component', () => {
  let wrapper;

  const initialState = {
    displayBubble: false,
  };

  beforeEach(() => {
    wrapper = shallow(<Component />);
  });

  it('check initial state', () => {
    expect(wrapper.state()).toEqual(initialState);
  });

  it('check change state', () => {
    wrapper.setState({ displayBubble: true });
    expect(wrapper.state()).toEqual({ displayBubble: true });
  });

  it('check toggle functions', () => {
    wrapper.instance().toggleBubble();
    expect(wrapper.state()).toEqual({ displayBubble: true });
    wrapper.instance().toggleBubble();
    expect(wrapper.state()).toEqual({ displayBubble: false });
  });

  it('check events handle', () => {
    wrapper.simulate('mouseenter');
    expect(wrapper.state()).toEqual({ displayBubble: true });
    wrapper.simulate('mouseleave');
    expect(wrapper.state()).toEqual({ displayBubble: false });
  });

  it('check bubble position', () => {
    wrapper.setProps({ bubblePosition: 'left' });
    wrapper.setState({ displayBubble: true });
    expect(wrapper.find('.dropdown__bubble').hasClass('dropdown__bubble_right')).toBe(true);
  });

  it('check mobile class', () => {
    wrapper.setProps({ isMobile: true });
    wrapper.setState({ displayBubble: true });
    expect(wrapper.find('.dropdown__bubble').hasClass('dropdown__bubble_mobile')).toBe(true);
  });
});
