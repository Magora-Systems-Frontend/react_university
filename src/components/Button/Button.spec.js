import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Button from './index';

configure({ adapter: new Adapter() });

describe('button snapshot', () => {
  it('capturing snapshot of button', () => {
    const renderedValue = renderer.create(<Button type="button" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('Shallow render Button component', () => {
  let wrapper;

  const objectProps = {
    children: 'string',
    onClick: (a) => a,
    type: 'button',
    colorStyle: 'colored',
    modificationClass: 'modClass',
  };

  beforeEach(() => {
    const { children, onClick, type, modificationClass, colorStyle } = objectProps;
    wrapper = shallow(
      <Button type={type} modificationClass={modificationClass} onClick={onClick} colorStyle={colorStyle}>
        {children}
      </Button>
    );
  });
  it('render component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('check children', () => {
    expect(wrapper.contains(objectProps.children)).toBe(true);
  });

  it('check type', () => {
    expect(wrapper.type(objectProps.type)).toBe(objectProps.type);
  });

  it('check modificationClass', () => {
    expect(wrapper.hasClass(objectProps.modificationClass)).toBe(true);
  });
  it('check colorStyle class', () => {
    expect(wrapper.hasClass(`btn_${objectProps.colorStyle}`)).toBe(true);
  });

  it('simulate click', () => {
    wrapper.simulate('click');
  });
});
