// The initial state of the App
import { ACTIONS_CONSTANTS } from '../../config/constants';
import { updateState } from 'utils/reducer';

const initialState = {
  modal: '',
  isShow: false,
  options: {},
};

function commonModalReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS.SHOW_MODAL:
      return updateState({ ...state }, { ...payload });
    case ACTIONS_CONSTANTS.HIDE_MODAL:
      return updateState({ ...state }, { modal: '', isShow: false });
    default:
      return state;
  }
}

export default commonModalReducer;
