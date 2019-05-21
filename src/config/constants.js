export const {
  API_URL = 'http://localhost:8021',
  API_VERSION = '1',
  LOCAL_STORAGE_PREFIX = '@REACT_TEMPLATE_APP',
  NODE_ENV,
  REACT_APP_GOOGLE_CLIENT_ID = '609222573894-edqe5vhhjcuva643omnln4p4b88p33mm.apps.googleusercontent.com',
  REACT_APP_FACEBOOK_APP_ID = '2284406111882705',
  REDUX_LOGGER_IS_ENABLED = false,
} = process.env || {};

export const messages = {};
export const RETRY_REMOTE_REQUEST_MS = 60000;
export const OVERLAY_LIFESPAN_MS = 5000;

export const ROUTES = {
  HOME_PAGE: '/',
  ADMIN_PANEL: '/admin-panel',
  REGISTRATION_FORM: '/registration-form',
  PASSWORD_SET_FORM: '/password-set',
  USER_PROFILE: '/user',
};

export const API_METHODS = {
  COUNTRIES: '/countries',
  CITIES: '/countries/cities',
  LOGIN: '/users/login',
  LOGIN_GOOGLE: '/users/login/google',
  LOGIN_FACEBOOK: '/users/login/facebook',
  LOGIN_VK: '/users/login/vk',
  SIGN_UP: '/users/register',
  SIGN_UP_PHONE: '/users/register/phone',
  PASSWORD_RECOVERY: '/users/password/recovery',
  PASSWORD_SET: '/users/password/set',
  USERS: '/users',
  COURSES: '/courses',
  CATEGORIES: '/categories',
  COMMENTS: '/comments',
};

export const ACTIONS_CONSTANTS = {
  APP_SET_AUTH_STATE: 'APP_SET_AUTH_STATE',
  APP_CLEAR_AUTH_STATE: 'APP_CLEAR_AUTH_STATE',
  APP_GET_USER_STATE: 'APP_GET_USER_STATE',
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};

export const ACTIONS_CONSTANTS_COURSES = {
  COURSES_GET_SUCCESS: 'COURSES_GET_SUCCESS',
  COURSES_POPULAR_GET_SUCCESS: 'COURSES_POPULAR_GET_SUCCESS',
};

export const ACTIONS_CONSTANTS_CATEGORIES = {
  CATEGORIES_GET_SUCCESS: 'CATEGORIES_GET_SUCCESS',
};

export const ACTIONS_CONSTANTS_COMMENTS = {
  COMMENTS_GET_SUCCESS: 'COMMENTS_GET_SUCCESS',
};
