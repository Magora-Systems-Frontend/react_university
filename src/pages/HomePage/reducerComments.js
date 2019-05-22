import { updateState } from 'utils/reducer';
import { ACTIONS_CONSTANTS_COMMENTS } from '../../config/constants';

const initialState = {};

function commentsReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS_COMMENTS.COMMENTS_GET_SUCCESS:
      return updateState({ ...state }, { payload });
    default:
      return state;
  }
}

export default commentsReducer;
