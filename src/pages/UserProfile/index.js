import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import LoadingIndicator from 'components/LoadingIndicator';
import reducer from './reducer';
import { getUserProfile } from './actions';

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class UserProfilePage extends React.PureComponent {
  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id: userId } = params;
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <LoadingIndicator>
        <div>userProfile</div>
      </LoadingIndicator>
    );
  }
}

UserProfilePage.propTypes = {
  match: PropTypes.object,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getUserProfile: bindActionCreators(getUserProfile, dispatch),
  };
}

const withReducer = injectReducer({ key: 'userProfilePage', reducer });

export default compose(withReducer)(UserProfilePage);
