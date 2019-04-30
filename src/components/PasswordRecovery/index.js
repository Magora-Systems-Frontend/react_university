import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { passwordRecovery } from 'pages/App/actions';
import { PasswordRecoveryForm } from './form';

class PasswordRecoveryComponent extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    hideModal: PropTypes.func,
  };

  state = {
    isLoading: false,
  };

  onSubmit = async values => {
    const res = await passwordRecovery(values, this.props.dispatch);

    if (!res) {
      throw new SubmissionError({
        email: 'Network error',
        password: 'Network error',
        confirmPassword: 'Network error',
      });
    }

    if (res.status === 401) {
      throw new SubmissionError({ email: 'Invalid email' });
    } else if (res.status !== 200) {
      throw new SubmissionError({ email: 'Unknown server error' });
    }

    this.props.hideModal();
  };

  render() {
    return (
      <div>
        <PasswordRecoveryForm onSubmit={this.onSubmit} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export const PasswordRecovery = connect(
  null,
  mapDispatchToProps
)(PasswordRecoveryComponent);
