import { getAxios } from 'utils/api/axiosClient';
import { API_METHODS, ACTIONS_CONSTANTS_COURSES } from '../../config/constants';

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

export function getCoursesState(state) {
  return {
    type: ACTIONS_CONSTANTS_COURSES.COURSES_GET_SUCCESS,
    payload: state,
  };
}
