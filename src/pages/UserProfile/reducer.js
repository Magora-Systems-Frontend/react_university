// The initial state of the App
const initialState = {};

function userProfileReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case 'APP_GET_USER_STATE':
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}

export default userProfileReducer;
