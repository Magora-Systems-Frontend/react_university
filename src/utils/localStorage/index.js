import * as localStorageHelper from './localStorage';

const PREFIX = process.env.WEB_APP_PREFIX || '@REACT_TEMPLATE_APP';
export const KEYS = {
  STORE: `${PREFIX}_$`,
  AUTH: 'AUTH',
};

/**
 *
 * @param key
 * @param store
 */
export const saveItem = (key, store = {}) => {
  localStorageHelper.setItem(`${KEYS.STORE}${key}`, JSON.stringify(store));
};

// /**
//  *
//  * @param key
//  */
// export const getItem = (key) => {
//   localStorageHelper.getItem(`${KEYS.STORE}${key}`);
// };

/**
 *
 * @param store
 */
export const saveStore = (store = {}) => {
  localStorageHelper.setItem(KEYS.STORE, JSON.stringify(store));
};

/**
 *
 */
export const loadStore = (key) => {
  let store = {};
  const data = localStorageHelper.getItem(`${KEYS.STORE}${key}`);
  if (!data) return store;
  try { store = JSON.parse(data); } catch (e) {}
  return store;
};

export const cleatStore = () => {
  localStorageHelper.clear();
};
