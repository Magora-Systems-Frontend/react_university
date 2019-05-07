import { ACTIONS_CONSTANTS } from '../../config/constants';

const initialState = {};

function userProfileReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS.APP_GET_USER_STATE:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}

export default userProfileReducer;
