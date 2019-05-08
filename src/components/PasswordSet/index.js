import React, { PureComponent } from 'react';
import { PasswordSetForm } from './form';
import { passwordSet } from 'pages/App/actions';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import lang from './lang.json';

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
      throw new SubmissionError({ newPassword: lang.errors.network_error });
    }

    if (res.status === 401) {
      throw new SubmissionError({ newPassword: lang.errors.invalid_pass });
    } else if (res.status !== 200) {
      throw new SubmissionError({ newPassword: lang.errors.unknown_server });
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
