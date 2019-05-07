import { LOCAL_STORAGE_PREFIX } from 'config/constants';
import * as localStorageHelper from './localStorage';

export const KEYS = {
  STORE: `${LOCAL_STORAGE_PREFIX}_$`,
  AUTH: 'AUTH',
};

export const saveItem = (key, store = {}) => {
  localStorageHelper.setItem(`${KEYS.STORE}${key}`, JSON.stringify(store));
};

export const loadStore = (key) => {
  let store = {};
  const data = localStorageHelper.getItem(`${KEYS.STORE}${key}`);
  if (!data) return store;
  try {
    store = JSON.parse(data);
  } catch (e) {}
  return store;
};

export function removeItem(key) {
  localStorageHelper.removeItem(`${KEYS.STORE}${key}`);
}

export const clearStore = () => {
  localStorageHelper.clear();
};
