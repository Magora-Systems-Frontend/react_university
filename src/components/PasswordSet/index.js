import React, { PureComponent } from 'react';
import { PasswordSetForm } from './form';
import { passwordSet } from 'pages/App/actions';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PasswordSetComponent extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  onSubmit = async values => {
    const res = await passwordSet(values, this.props.dispatch);
    if (!res) {
      throw new SubmissionError({ newPassword: 'Network error' });
    }

    if (res.status === 401) {
      throw new SubmissionError({ newPassword: 'Invalid password' });
    } else if (res.status !== 200) {
      throw new SubmissionError({ newPassword: 'Unknown server error' });
    }
  };

  render() {
    return (
      <div>
        <PasswordSetForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export const PasswordSet = connect(
  null,
  mapDispatchToProps
)(PasswordSetComponent);
