import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { passwordSet } from 'pages/App/actions';
import { FormWrapper } from 'components';
import { PasswordSetForm } from './form';

class PasswordSetComponent extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    dispatch: Function.prototype,
  };

  onSubmit = async (values) => {
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
      <FormWrapper>
        <PasswordSetForm onSubmit={this.onSubmit} />
      </FormWrapper>
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
