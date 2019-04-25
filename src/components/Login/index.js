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

  onSubmit = async (values) => {

    const res = await login(values, this.props.dispatch);

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

  render() {
    return (
      <div className="login">
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  };
}
