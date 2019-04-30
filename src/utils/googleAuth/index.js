import { REACT_APP_GOOGLE_CLIENT_ID } from 'config/constants';

// const _onInit = auth2 => console.log('googleAuthInit init OK', auth2);
const _onInit = () => {};
const _onError = (err) => console.log('googleAuthInit init error', err);

export const googleAuthInit = () => {
  window.gapi.load('auth2', () => {
    window.gapi.auth2
      .init({
        client_id: REACT_APP_GOOGLE_CLIENT_ID,
      })
      .then(_onInit, _onError);
  });
};
