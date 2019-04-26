import { getAxios } from 'utils/api/axiosClient';
import { API_METHODS } from 'config/constants';
import { saveItem, removeItem, KEYS } from 'utils/localStorage';

/*
 * Application Actions
*/

export async function login(values, dispatch) {
  const axios = getAxios();

  let response;
  try {
    response = await axios.post(API_METHODS.LOGIN, values);
    const { data } = response;

    data.isAuth = true;
    saveItem(KEYS.AUTH, data);
    dispatch(setAuthState(data));

  } catch (error) {
    return error;
  }

  return response;
}

export async function signUp(values, dispatch) {
  const axios = getAxios();
  let response;
  try {
    response = await axios.post(API_METHODS.SIGN_UP, values);
    const { data } = response;

    data.isAuth = true;
    saveItem(KEYS.AUTH, data);
    dispatch(setAuthState(data));

  } catch (error) {
    return error;
  }

  return response;
}

export function setAuthState(authState) {
  return {
    type: 'APP_SET_AUTH_STATE',
    payload: {
      ...authState,
    },
  };
}

export function logout() {
  removeItem(KEYS.AUTH);

  return {
    type: 'APP_CLEAR_AUTH_STATE',
  };
}
