import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes, Field } from 'redux-form';

import './edit-profile-form.scss';

@reduxForm({
  form: 'editProfile',
})
export class EditProfileForm extends React.PureComponent {
  static propTypes = {
    ...propTypes,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>

        <div className="registration-form__submit">
          <button className="registration-form__submit-btn ant-btn ant-btn-primary">Send</button>
        </div>
      </form>
    );
  }
}
