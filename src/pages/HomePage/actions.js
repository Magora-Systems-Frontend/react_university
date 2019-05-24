import { getAxios } from 'utils/api/axiosClient';
import {
  API_METHODS,
  ACTIONS_CONSTANTS_COURSES,
  ACTIONS_CONSTANTS_CATEGORIES,
  ACTIONS_CONSTANTS_COMMENTS,
  ACTIONS_CONSTANTS_LANGUAGE,
} from '../../config/constants';

export function getCourses(title) {
  const url = `${API_METHODS.COURSES}/${title}`;

  const axios = getAxios();

  let response;

  return async (dispatch) => {
    try {
      response = await axios.get(url);
      dispatch(getCoursesState(response));
    } catch (error) {
      return error;
    }

    return response;
  };
}

export function getCoursesPopular(title) {
  const url = `${API_METHODS.COURSES}/${title}`;

  const axios = getAxios();

  let response;

  return async (dispatch) => {
    try {
      response = await axios.get(url);
      dispatch(getCoursesPopularState(response));
    } catch (error) {
      return error;
    }

    return response;
  };
}

export function getCategories() {
  const url = `${API_METHODS.CATEGORIES}`;

  const axios = getAxios();

  let response;

  return async (dispatch) => {
    try {
      response = await axios.get(url);
      dispatch(getCategoriesState(response));
    } catch (error) {
      return error;
    }

    return response;
  };
}

export function getComments() {
  const url = `${API_METHODS.COMMENTS}`;

  const axios = getAxios();

  let response;

  return async (dispatch) => {
    try {
      response = await axios.get(url);
      dispatch(getCommentsState(response));
    } catch (error) {
      return error;
    }

    return response;
  };
}

export function getLanguage(event) {
  let response = event === 'EN' ? 'RU' : 'EN';

  return (dispatch, getState) => {
    dispatch(getLanguageState(event));
  };
}

export function getCoursesState(state) {
  return {
    type: ACTIONS_CONSTANTS_COURSES.COURSES_GET_SUCCESS,
    payload: state,
  };
}

export function getCoursesPopularState(state) {
  return {
    type: ACTIONS_CONSTANTS_COURSES.COURSES_POPULAR_GET_SUCCESS,
    payload: state,
  };
}

export function getCategoriesState(state) {
  return {
    type: ACTIONS_CONSTANTS_CATEGORIES.CATEGORIES_GET_SUCCESS,
    payload: state,
  };
}

export function getCommentsState(state) {
  return {
    type: ACTIONS_CONSTANTS_COMMENTS.COMMENTS_GET_SUCCESS,
    payload: state,
  };
}

export function getLanguageState(state) {
  return {
    type: ACTIONS_CONSTANTS_LANGUAGE.CURRENT_LANGUAGE,
    payload: state,
  };
}
