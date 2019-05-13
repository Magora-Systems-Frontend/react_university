import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { login } from 'pages/App/actions';
import { message } from 'antd';
import { API_METHODS } from 'config/constants';
import { LoginForm } from './form';
import lang from './lang.json';

@connect(
  null,
  mapDispatchToProps
)
export class Login extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
  };

  static defaultProps = {
    dispatch: Function.prototype,
    showModal: Function.prototype,
    hideModal: Function.prototype,
  };

  state = {
    isLoading: false,
  };

  onSubmit = async (values) => {
    this.setState({ isLoading: true });
    const res = await login(values, this.props.dispatch, API_METHODS.LOGIN);
    this.setState({ isLoading: false });
    const { success, errors } = lang;

    if (!res) {
      throw new SubmissionError({ email: errors.network_error, password: errors.network_error });
    }
    if (res.status === 401) {
      throw new SubmissionError({ email: errors.invalid_data, password: errors.invalid_data });
    } else if (res.status !== 200) {
      throw new SubmissionError({ email: errors.unknown_server, password: errors.unknown_server });
    }

    message.success(success.login);
    this.props.hideModal();
  };

  onGoogleLoginClick = async () => {
    let id_token;
    const { success, errors } = lang;
    try {
      const GoogleAuth = window.gapi.auth2.getAuthInstance();
      const GoogleUser = await GoogleAuth.signIn();
      id_token = GoogleUser.getAuthResponse().id_token;
    } catch (error) {
      if (error.error === 'network_error') {
        return message.error(errors.network_error);
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

    const res = await login(requestValues, this.props.dispatch, API_METHODS.LOGIN_GOOGLE);

    if (!res) {
      return message.error(errors.network_error);
    } else if (res.status === 401) {
      return message.error(errors.invalid_auth_data);
    } else if (res.status !== 200) {
      return message.error(errors.unknown_server);
    }

    message.success(success.login);
    this.props.hideModal();
  };

  onFacebookLoginClick = async () => {
    window.FB.login(
      (response) => {
        if (!response.authResponse) {
          return;
        }
        const { accessToken, userID } = response.authResponse;
        window.FB.api(
          '/me',
          { locale: 'en_US', fields: 'id, first_name, last_name, email, picture' },
          async (profileResponse) => {
            /*
             * This method should return array of friends but it doesn't happen, because
             * with according FB documentation user friends should also give permission
             * for our application
             * detailed: https://developers.facebook.com/docs/facebook-login/permissions#reference-user_friends
             */

            // window.FB.api(`/${userID}/friends`, 'GET', {}, function(response) {
            // });

            const requestValues = {
              firstName: profileResponse.first_name,
              lastName: profileResponse.last_name,
              avatarUrl: profileResponse.picture.data.url,
              email: profileResponse.email,
              accessToken: accessToken,
              userID,
            };

            const res = await login(requestValues, this.props.dispatch, API_METHODS.LOGIN_FACEBOOK);
            const { success, errors } = lang;
            if (!res) {
              return message.error(errors.network_error);
            } else if (res.status === 401) {
              return message.error(errors.invalid_auth_data);
            } else if (res.status !== 200) {
              return message.error(errors.unknown_server);
            }

            message.success(success.login);
            this.props.hideModal();
          }
        );
      },
      { scope: 'email' } /* user_friends - for user-friends permission (warning in login pop-up) */
    );
  };

  onVKLoginClick = async () => {
    let id_token;
    let user;

    await window.VK.Auth.login(function(response) {
      if (response.session) {
        id_token = response.session.sid;
        user = response.session.user;
        resData();
      } else {
        return;
      }
    });

    let resData = () => {
      const requestValues = {
        // firstName: user.first_name,
        // lastName: user.last_name,
        // avatarUrl: user.href,
        // email: user.nickname,
        user_id: user.id,
        id_token: id_token,
      };
      const res = login(requestValues, this.props.dispatch, API_METHODS.LOGIN_VK);
      const { success, errors } = lang;

      if (!res) {
        return message.error(errors.network_error);
      } else if (res.status === 401) {
        return message.error(errors.invalid_auth_data);
      } else if (res.status !== 200) {
        return message.error(errors.unknown_server);
      }

      message.success(success.login);
      this.props.hideModal();
    };
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
          showModal={this.props.showModal}
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
