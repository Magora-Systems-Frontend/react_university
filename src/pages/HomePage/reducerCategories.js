import { updateState } from 'utils/reducer';
import { ACTIONS_CONSTANTS_CATEGORIES } from '../../config/constants';

const initialState = {};

function categoriesReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS_CATEGORIES.CATEGORIES_GET_SUCCESS:
      return updateState({ ...state }, { payload });
    default:
      return state;
  }
}

export default categoriesReducer;
