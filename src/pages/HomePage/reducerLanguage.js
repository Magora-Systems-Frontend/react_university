import { updateState } from 'utils/reducer';
import { ACTIONS_CONSTANTS_LANGUAGE } from '../../config/constants';

const initialState = { language: 'EN' };

function languageReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_CONSTANTS_LANGUAGE.CURRENT_LANGUAGE:
      return updateState({ ...state }, { language: payload });
    default:
      return state;
  }
}

export default languageReducer;
