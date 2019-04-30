/*
 * Common Modal Actions
 */

export function showModal(modal, options) {
  return {
    type: 'SHOW_MODAL',
    payload: {
      modal,
      options,
      isShow: true,
    },
  };
}

export function hideModal() {
  return {
    type: 'HIDE_MODAL',
  };
}
