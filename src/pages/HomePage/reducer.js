import { updateState } from 'utils/reducer';
import { ACTIONS_CONSTANTS_COURSES } from '../../config/constants';

const initialState = {};

function coursesReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS_COURSES.COURSES_GET_SUCCESS:
      return updateState({ ...state }, { payload });
    case ACTIONS_CONSTANTS_COURSES.COURSES_POPULAR_GET_SUCCESS:
      return updateState({ ...state }, { payloadPopular: payload });
    default:
      return state;
  }
}

export default coursesReducer;
