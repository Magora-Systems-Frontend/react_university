import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { login } from 'pages/App/actions';
import { LoginForm } from './form';

@connect(null, mapDispatchToProps)
export class Login extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    hideModal: PropTypes.func,
  };

  state = {
    isLoading: false,
  };

  onSubmit = async (values) => {

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

    this.props.hideModal();
  };

  onGoogleLoginClick = async () => {
    console.log('google');
    const auth2 = window.gapi.auth2.getAuthInstance();
    const googleUser = await auth2.signIn();

    const profile = googleUser.getBasicProfile();

    console.log('ID: ' + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // auth2.signIn().then(async (googleUser) => {
    //
    //   const profile = googleUser.getBasicProfile();
    //   console.log('ID: ' + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
    //   console.log('Full Name: ' + profile.getName());
    //   console.log('Given Name: ' + profile.getGivenName());
    //   console.log('Family Name: ' + profile.getFamilyName());
    //   console.log('Image URL: ' + profile.getImageUrl());
    //   console.log('Email: ' + profile.getEmail());
    //
    //   const res = await login(values, this.props.dispatch, 'LOGIN_SERVER');
    //
    //   // токен
    //   const id_token = googleUser.getAuthResponse().id_token;
    //   console.log('ID Token: ' + id_token);
    // });
  };

  render() {
    return (
      <div className="login">
        <LoginForm
          onSubmit={this.onSubmit}
          isLoading={this.state.isLoading}
          onGoogleLoginClick={this.onGoogleLoginClick}
        />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  };
}
