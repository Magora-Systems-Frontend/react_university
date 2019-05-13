import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signUp, signUpPhone } from 'pages/App/actions';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { Button } from 'antd';
import { SignUpForm } from './form/signUp';
import { SignUpPhoneForm } from './form/signUpPhone';

import lang from './lang.json';

@connect(
  null,
  mapDispatchToProps
)
class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phoneSignUp: false,
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    hideModal: PropTypes.func,
  };

  static defaultProps = {
    dispatch: Function.prototype,
    hideModal: Function.prototype,
  };

  onSubmit = async (values) => {
    const res = await signUp(values, this.props.dispatch);

    if (!res) {
      throw new SubmissionError({
        email: lang.errors.network_error,
        password: lang.errors.network_error,
        confirmPassword: lang.errors.network_error,
      });
    }

    if (res.status === 401) {
      throw new SubmissionError({
        email: lang.errors.invalid_field,
        password: lang.errors.invalid_field,
        confirmPassword: lang.errors.invalid_field,
      });
    } else if (res.status !== 200) {
      throw new SubmissionError({
        email: lang.errors.unknown_server,
        password: lang.errors.unknown_server,
        confirmPassword: lang.errors.unknown_server,
      });
    }

    this.props.hideModal();
  };

  onSubmitPhone = async (values) => {
    const res = await signUpPhone(values, this.props.dispatch);
    if (!res) {
      throw new SubmissionError({ phone: lang.errors.network_error, code: lang.errors.network_error });
    }

    if (res.status === 401) {
      throw new SubmissionError({ phone: lang.errors.invalid_field, code: lang.errors.invalid_field });
    } else if (res.status !== 200) {
      throw new SubmissionError({ phone: lang.errors.unknown_server, code: lang.errors.unknown_server });
    }

    this.props.hideModal();
  };

  toggleRegistrationType = () => {
    this.setState({
      phoneSignUp: !this.state.phoneSignUp,
    });
  };

  render() {
    const { phoneSignUp } = this.state;
    return (
      <div className="sign-up">
        <Button
          onClick={() => this.toggleRegistrationType()}
          type="default"
          htmlType="button"
          style={{ width: '100%', marginBottom: '24px' }}>
          {phoneSignUp ? lang.EN.emailSignUp : lang.EN.phoneSignUp}
        </Button>

        {phoneSignUp ? <SignUpPhoneForm onSubmit={this.onSubmitPhone} /> : <SignUpForm onSubmit={this.onSubmit} />}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export { SignUp };
