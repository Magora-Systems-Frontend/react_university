import React, { PureComponent } from 'react';
import { SignUpForm } from './form';
import { connect } from 'react-redux';
import { signUp } from 'pages/App/actions';
import PropTypes from "prop-types";
import {SubmissionError} from "redux-form";

@connect(null, mapDispatchToProps)
export class SignUp extends PureComponent{
  static propTypes = {
    dispatch: PropTypes.func,
    hideModal: PropTypes.func,
  };

  onSubmit = async (values) => {
    const res = await signUp(values, this.props.dispatch);

    if (!res) {
      throw new SubmissionError({ email: 'Network error', password: 'Network error', confirmPassword: 'Network error' });
    }

    if (res.status === 401) {
      throw new SubmissionError({ email: 'Invalid email or password', password: 'Invalid email or password', confirmPassword: 'Network error' });
    } else if (res.status !== 200) {
      throw new SubmissionError({ email: 'Unknown server error', password: 'Unknown server error', confirmPassword: 'Unknown server error' });
    }

    this.props.hideModal();
  };

  render() {
    return (
      <div className="sign-up">
        <SignUpForm
          onSubmit={this.onSubmit}
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
