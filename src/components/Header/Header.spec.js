import 'mocks/matchMedia.mock';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import thunk from 'redux-thunk';
import { Header } from './index';

configure({ adapter: new Adapter() });

const initialLangState = { languageState: { language: 'EN' } };

describe('component snapshot', () => {
  it('capturing snapshot of Header ', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialLangState);
    const renderedValue = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Header languageState={initialLangState.languageState} />
          </Provider>
        </Router>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('test dump component', function() {
  let wrapper;

  const initialState = {
    showMobileSearch: false,
    showMobileNav: false,
  };

  beforeEach(() => {
    wrapper = shallow(<Header languageState={initialLangState.languageState} />);
  });
  it('render the dumb component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('check initial state', () => {
    expect(wrapper.state()).toEqual(initialState);
  });

  it('check toggle search functions', () => {
    wrapper.instance().toggleMobileSearch();
    expect(wrapper.state().showMobileSearch).toBe(true);
    wrapper.instance().toggleMobileSearch();
    expect(wrapper.state().showMobileSearch).toBe(false);
  });
});
