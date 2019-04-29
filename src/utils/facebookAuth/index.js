import { REACT_APP_FACEBOOK_APP_ID } from 'config/constants';

export const facebookAuthInit = () => {

  window.FB.init({
    appId: REACT_APP_FACEBOOK_APP_ID, // FB App ID
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.2',
    cookie: false,
    status: true,
  });

};
