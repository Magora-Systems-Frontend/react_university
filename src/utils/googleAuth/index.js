import { REACT_APP_GOOGLE_CLIENT_ID } from 'config/constants';

export const googleAuthInit = () => {
  window.gapi.load('auth2', () => {
    window.gapi.auth2.init({
      client_id: REACT_APP_GOOGLE_CLIENT_ID,
    });
  });
};
