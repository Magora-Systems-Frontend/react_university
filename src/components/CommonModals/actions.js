/*
 * Common Modal Actions
 */

import { ACTIONS_CONSTANTS } from '../../config/constants';

export function showModal(modal, options) {
  return {
    type: ACTIONS_CONSTANTS.SHOW_MODAL,
    payload: {
      modal,
      options,
      isShow: true,
    },
  };
}

export function hideModal() {
  return {
    type: ACTIONS_CONSTANTS.HIDE_MODAL,
  };
}
