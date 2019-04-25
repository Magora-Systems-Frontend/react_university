import { getAxios } from 'utils/api/axiosClient';
import { API_METHODS } from 'config/constants';

/*
 * Application Actions
*/

export async function login(values, dispatch) {
  const axios = getAxios();

  let response;
  try {
    response = await axios.post(API_METHODS.LOGIN, values);
    dispatch(setAuthState(response));
    response.status = 200;
  } catch (error) {
    return error;
  }

  return response;
}

export function setAuthState(response) {
  return {
    type: 'APP_SET_AUTH_STATE',
    payload: {
      isAuth: true,
      ...response,
    },
  };
}
