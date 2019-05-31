import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
//
import coursesReducer from './pages/HomePage/reducer';
import categoriesReducer from './pages/HomePage/reducerCategories';
import commentsReducer from './pages/HomePage/reducerComments';
import languageReducer from './pages/HomePage/reducerLanguage';

// Creates the main reducer with the dynamically injected ones

export default function createReducer(injectedReducers) {
  return combineReducers({
    form: formReducer,
    coursesState: coursesReducer, //reducer for all courses
    categoriesState: categoriesReducer, //reducer for categories courses
    commentsState: commentsReducer, //reducer for comments
    languageState: languageReducer, //reducer for language
    ...injectedReducers,
  });
}
