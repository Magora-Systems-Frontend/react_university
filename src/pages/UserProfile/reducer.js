// The initial state of the App
const initialState = {};

function userProfileReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}

export default userProfileReducer;
