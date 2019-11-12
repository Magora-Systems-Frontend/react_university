import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import thunk from 'redux-thunk';
import { getLanguage } from '../../pages/HomePage/actions';
import { ACTIONS_CONSTANTS_LANGUAGE } from '../../config/constants';
import SmartComponent, { Footer } from './index';

configure({ adapter: new Adapter() });

const initialState = { languageState: { language: 'EN' } };

describe('Component snapshot', () => {
  it('capturing snapshot of Footer', () => {
    const renderedValue = renderer.create(<Footer languageState={initialState.languageState} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('React-redux test', function() {
  const mockStore = configureStore([thunk]);
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <SmartComponent />
      </Provider>
    );
  });

  it('render the connected(SMART) SmartComponent', () => {
    expect(container.find(SmartComponent).length).toEqual(1);
  });

  it('check Prop matches with initialState', () => {
    expect(container.find(Footer).prop('languageState')).toEqual(initialState.languageState);
  });

  it('check action on dispatching', async () => {
    let actions;
    const store = mockStore();
    await store.dispatch(getLanguage('RU'));
    actions = store.getActions();
    expect(actions[0]).toEqual({ type: ACTIONS_CONSTANTS_LANGUAGE.CURRENT_LANGUAGE, payload: 'RU' });
  });
});
