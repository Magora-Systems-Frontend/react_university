import { getAxios } from 'utils/api/axiosClient';
import { saveItem, removeItem, KEYS } from 'utils/localStorage';
import { API_METHODS, ACTIONS_CONSTANTS } from '../../config/constants';

/*
 * Application Actions
 */

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} values   Body params
 * @param  {function} dispatch   Redux dispatch function
 * @param  {string} type   Login type 'LOGIN_SERVER', 'LOGIN_GOOGLE'
 *
 * @return {object|undefined} Returns the response, or throws an error
 */
export async function login(values, dispatch, type = 'COMMON') {
  const axios = getAxios();

  let requestUrl = type;
  let response;
  try {
    response = await axios.post(requestUrl, values);
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

export async function signUpPhone(values, dispatch) {
  const axios = getAxios();
  let response;
  try {
    response = await axios.post(API_METHODS.SIGN_UP_PHONE, values);
    const { data } = response;

    data.isAuth = true;
    saveItem(KEYS.AUTH, data);
    dispatch(setAuthState(data));
  } catch (error) {
    return error;
  }

  return response;
}

export async function passwordRecovery(values, dispatch) {
  const axios = getAxios();
  let response;
  try {
    response = await axios.post(API_METHODS.PASSWORD_RECOVERY, values);
    const { data } = response;
    dispatch(setAuthState(data));
  } catch (error) {
    return error;
  }
  return response;
}

export async function passwordSet(values, dispatch) {
  const axios = getAxios();
  let response;

  try {
    response = await axios.post(API_METHODS.PASSWORD_SET, values);
    const { data } = response;
    dispatch(setAuthState(data));
  } catch (error) {
    return error;
  }
  return response;
}

export function setAuthState(authState) {
  return {
    type: ACTIONS_CONSTANTS.APP_SET_AUTH_STATE,
    payload: {
      ...authState,
    },
  };
}

export function logout() {
  removeItem(KEYS.AUTH);

  return {
    type: ACTIONS_CONSTANTS.APP_CLEAR_AUTH_STATE,
  };
}
