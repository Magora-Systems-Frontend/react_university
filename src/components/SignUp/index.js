import React, { PureComponent } from 'react';
import { SignUpForm } from './form/signUp';
import { SignUpPhoneForm } from './form/signUpPhone';
import { connect } from 'react-redux';
import { signUp, signUpPhone } from 'pages/App/actions';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { Button } from 'antd';

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

  onSubmit = async values => {
    const res = await signUp(values, this.props.dispatch);

    if (!res) {
      throw new SubmissionError({
        email: 'Network error',
        password: 'Network error',
        confirmPassword: 'Network error',
      });
    }

    if (res.status === 401) {
      throw new SubmissionError({
        email: 'Invalid email or password',
        password: 'Invalid email or password',
        confirmPassword: 'Network error',
      });
    } else if (res.status !== 200) {
      throw new SubmissionError({
        email: 'Unknown server error',
        password: 'Unknown server error',
        confirmPassword: 'Unknown server error',
      });
    }

    this.props.hideModal();
  };

  onSubmitPhone = async values => {
    const res = await signUpPhone(values, this.props.dispatch);
    if (!res) {
      throw new SubmissionError({ phone: 'Network error', code: 'Network error' });
    }

    if (res.status === 401) {
      throw new SubmissionError({ phone: 'Invalid phone or code', code: 'Invalid phone or code' });
    } else if (res.status !== 200) {
      throw new SubmissionError({ phone: 'Unknown server error', code: 'Unknown server error' });
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
          style={{ width: '100%', marginBottom: '24px' }}
        >
          {phoneSignUp ? 'E-mail sign up' : 'Phone sign up'}
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

export { SignUp }
