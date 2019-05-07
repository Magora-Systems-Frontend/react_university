import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import LoadingIndicator from 'components/LoadingIndicator';
import reducer from './reducer';
import { getUserProfile } from './actions';

import './user.scss';

const mapStateToProps = ({ userState }) => ({
  userState,
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: bindActionCreators(getUserProfile, dispatch),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class UserProfilePage extends React.PureComponent {
  static propTypes = {
    match: PropTypes.object,
    userState: PropTypes.object,
    getUserProfile: PropTypes.func,
  };

  static defaultProps = {
    match: {},
    userState: {},
    getUserProfile: Function.prototype,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id: userId } = params;
    await this.props.getUserProfile(userId);
  }

  render() {
    const { userState } = this.props;
    const { payload = {} } = userState;
    return (
      <div className="user">
        <div className="user__logo-container">
          <img className="user__logo-container_img" src={payload.avatarUrl} alt="" />
          <div className="user__logo-container_name">
            {payload.firstName} {payload.lastName}
          </div>
        </div>
        <div className="user__text-container">
          <div className="user__text-container_item">
            <div className="title">First Name:</div>
            <div className="text">{payload.firstName}</div>
          </div>
          <div className="user__text-container_item">
            <div className="title">Last Name:</div>
            <div className="text">{payload.lastName}</div>
          </div>
          <div className="user__text-container_item">
            <div className="title">Email:</div>
            <div className="text">{payload.email}</div>
          </div>
          <div className="user__text-container_item">
            <div className="title">City:</div>
            <div className="text">{payload.city}</div>
          </div>
        </div>
      </div>
    );
  }
}
