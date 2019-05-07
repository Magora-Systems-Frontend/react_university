import { getAxios } from 'utils/api/axiosClient';
import { API_METHODS, ACTIONS_CONSTANTS } from '../../config/constants';

export function getUserProfile(userId) {
  const url = `${API_METHODS.USERS}/${userId}`;

  const axios = getAxios();

  let response;

  return async (dispatch) => {
    try {
      response = await axios.get(url);
      dispatch(getUserState(response));
    } catch (error) {
      return error;
    }

    return response;
  };
}

export function getUserState(state) {
  return {
    type: ACTIONS_CONSTANTS.APP_GET_USER_STATE,
    payload: state,
  };
}
