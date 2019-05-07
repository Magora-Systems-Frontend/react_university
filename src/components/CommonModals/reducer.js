// The initial state of the App
import { ACTIONS_CONSTANTS } from '../../config/constants';

const initialState = {
  modal: '',
  isShow: false,
  options: {},
};

function commonModalReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS.SHOW_MODAL:
      return {
        ...state,
        ...payload,
      };
    case ACTIONS_CONSTANTS.HIDE_MODAL:
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
