import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
//
import globalReducer from './pages/App/reducer';
import coursesReducer from './pages/HomePage/reducer';
import categoriesReducer from './pages/HomePage/reducerCategories';
import commentsReducer from './pages/HomePage/reducerComments';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers, { history }) {
  return combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    form: formReducer,
    coursesState: coursesReducer,
    categoriesState: categoriesReducer,
    commentsState: commentsReducer,
    ...injectedReducers,
  });
}
