export default (store) => (next) => (action) => {
  const state = store.getState();
  const scope = action.scope || 'INTERNAL';
  const bg = ((type) => {
    if (type === 'SERVER') return '#ab1b1b';
    if (type === 'CLIENT') return '#315d9e';
    return '#368212';
  })(scope);
  /*eslint-disable-next-line*/
  console.info(`%c__${scope}__ :: ${action.type}`, `background-color: ${bg}; color: white;`, { action, state });
  return next(action);
};
