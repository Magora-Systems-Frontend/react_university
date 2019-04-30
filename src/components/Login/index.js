import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { login } from 'pages/App/actions';
import { message } from 'antd';
import { LoginForm } from './form';

@connect(
  null,
  mapDispatchToProps
)
export class Login extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    hideModal: PropTypes.func,
  };

  state = {
    isLoading: false,
  };

  onSubmit = async values => {
    this.setState({ isLoading: true });
    const res = await login(values, this.props.dispatch, 'LOGIN_SERVER');
    this.setState({ isLoading: false });

    if (!res) {
      throw new SubmissionError({ email: 'Network error', password: 'Network error' });
    }
    if (res.status === 401) {
      throw new SubmissionError({ email: 'Invalid email or password', password: 'Invalid email or password' });
    } else if (res.status !== 200) {
      throw new SubmissionError({ email: 'Unknown server error', password: 'Unknown server error' });
    }

    message.success('Successful login!');
    this.props.hideModal();
  };

  onGoogleLoginClick = async () => {
    let id_token;
    try {
      const GoogleAuth = window.gapi.auth2.getAuthInstance();
      const GoogleUser = await GoogleAuth.signIn();
      id_token = GoogleUser.getAuthResponse().id_token;
    } catch (error) {
      if (error.error === 'network_error') {
        return message.error('Network error');
      }
      return;
    }

    /* You can get user profile info on client, but we will do it on server side */
    // const profile = GoogleUser.getBasicProfile();
    const requestValues = {
      // firstName: profile.getGivenName(),
      // lastName: profile.getFamilyName(),
      // avatarUrl: profile.getImageUrl(),
      // email: profile.getEmail(),
      id_token: id_token,
    };

    const res = await login(requestValues, this.props.dispatch, 'LOGIN_GOOGLE');

    if (!res) {
      return message.error('Network error');
    } else if (res.status === 401) {
      return message.error('Invalid auth data!');
    } else if (res.status !== 200) {
      return message.error('Unknown server error');
    }

    message.success('Successful login!');
    this.props.hideModal();
  };

  onFacebookLoginClick = async () => {
    window.FB.login(
      response => {
        if (!response.authResponse) {
          return;
        }
        const { accessToken, userID } = response.authResponse;
        console.log(accessToken);
        console.log(response);
        window.FB.api(
          '/me',
          { locale: 'en_US', fields: 'id, first_name, last_name, email, picture' },
          async profileResponse => {
            /*
             * This method should return array of friends but it doesn't happen, because
             * with according FB documentation user friends should also give permission
             * for our application
             * detailed: https://developers.facebook.com/docs/facebook-login/permissions#reference-user_friends
             */

            // window.FB.api(`/${userID}/friends`, 'GET', {}, function(response) {
            // console.log(response);
            // });

            const requestValues = {
              firstName: profileResponse.first_name,
              lastName: profileResponse.last_name,
              avatarUrl: profileResponse.picture.data.url,
              email: profileResponse.email,
              accessToken: accessToken,
              userID,
            };

            const res = await login(requestValues, this.props.dispatch, 'LOGIN_FACEBOOK');

            if (!res) {
              return message.error('Network error');
            } else if (res.status === 401) {
              return message.error('Invalid auth data!');
            } else if (res.status !== 200) {
              return message.error('Unknown server error');
            }

            message.success('Successful login!');
            this.props.hideModal();
          }
        );
      },
      { scope: 'email' }
    ); /* user_friends - for user-friends permission (warning in login pop-up) */
  };

  onVKLoginClick = async () => {
    let id_token;
    // try {
    //   const GoogleAuth = window.gapi.auth2.getAuthInstance();
    //   const GoogleUser = await GoogleAuth.signIn();
    //   id_token = GoogleUser.getAuthResponse().id_token;
    // } catch (error) {
    //   if (error.error === 'network_error') {
    //     return message.error('Network error');
    //   }
    //   return;
    // }
    //
    // /* You can get user profile info on client, but we will do it on server side */
    // // const profile = GoogleUser.getBasicProfile();
    // const requestValues = {
    //   // firstName: profile.getGivenName(),
    //   // lastName: profile.getFamilyName(),
    //   // avatarUrl: profile.getImageUrl(),
    //   // email: profile.getEmail(),
    //   id_token: id_token,
    // };

    // const res = await login(requestValues, this.props.dispatch, 'LOGIN_VK');

    // if (!res) {
    //   return message.error('Network error');
    // } else if (res.status === 410) {
    //   return message.error('Invalid auth data!');
    // } else if (res.status !== 200) {
    //   return message.error('Unknown server error');
    // }
    //
    // message.success('Successful login!');
    // this.props.hideModal();
  };

  render() {
    return (
      <div className="login">
        <LoginForm
          onSubmit={this.onSubmit}
          isLoading={this.state.isLoading}
          onGoogleLoginClick={this.onGoogleLoginClick}
          onFacebookLoginClick={this.onFacebookLoginClick}
          onVKLoginClick={this.onVKLoginClick}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
