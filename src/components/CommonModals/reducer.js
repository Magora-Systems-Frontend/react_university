// The initial state of the App
const initialState = {
  modal: '',
  isShow: false,
  options: {},
};

function commonModalReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        ...payload,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        modal: '',
        isShow: false,
      };
    default:
      return state;
  }
}

export default commonModalReducer;
