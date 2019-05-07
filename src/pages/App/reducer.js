import { ACTIONS_CONSTANTS } from '../../config/constants';

// The initial state of the App
const initialState = {
  authState: {
    isAuth: false,
  },
};

function appReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS.APP_CLEAR_AUTH_STATE:
      return {
        ...state,
        authState: { isAuth: false },
      };
    case ACTIONS_CONSTANTS.APP_SET_AUTH_STATE:
      return {
        ...state,
        authState: { ...payload },
      };
    default:
      return state;
  }
}

export default appReducer;
