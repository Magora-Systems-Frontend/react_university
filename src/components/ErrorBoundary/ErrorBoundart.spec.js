import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ErrorBoundary as Component } from './index';

configure({ adapter: new Adapter() });

describe('check render error information', () => {
  const wrapper = shallow(<Component />);
  it('check state fields render', () => {
    wrapper.setState({ error: true, errorInfo: 'error' });
    expect(wrapper.find('details')).toHaveLength(1);
  });
});
