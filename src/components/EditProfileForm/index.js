import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateProfile } from 'pages/App/actions';
import { EditProfileForm } from './form';

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class EditProfile extends React.PureComponent {
  onSubmit = (values) => {
    this.props.updateProfile(values);

    window.scrollTo(0, 0);
    message.success('Profile edited!');
  };

  render() {
    const { userInfo } = this.props;

    return (
      <EditProfileForm
        onSubmit={this.onSubmit}
        initialValues={{
          lastName: userInfo.lastName,
          firstName: userInfo.firstName,
          patronymic: userInfo.patronymic,
          userName: userInfo.userName,
          date: userInfo.date,
          gender: userInfo.gender,
        }}
      />
    );
  }
}

function mapStateToProps({ global }) {
  const { authState = {} } = global;
  const { userInfo = {} } = authState;
  return {
    userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateProfile: bindActionCreators(updateProfile, dispatch),
  };
}

EditProfile.propTypes = {
  userInfo: PropTypes.object,
  updateProfile: PropTypes.func,
};
