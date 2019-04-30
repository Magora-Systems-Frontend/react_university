import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from '../../utils/injectReducer';
import reducer from '../HomePage/reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class UserProfilePage extends React.PureComponent {
  render() {
    return <div>userProfile</div>;
  }
}

UserProfilePage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const withReducer = injectReducer({ key: 'userProfilePage', reducer });

export default compose(withReducer)(UserProfilePage);
