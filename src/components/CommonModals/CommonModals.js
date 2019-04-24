import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

// CommonModals
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

@connect(mapStateToProps, mapDispatchToProps)
class CommonModals extends React.PureComponent {
  renderModal = () => {
    const { commonModals } = this.props;
    const { modal = '', isShow, options } = commonModals;
    switch (modal) {
      case 'login':
        return(<LoginModal isShow={isShow} options={options} />);
      case 'sign-up':
        return (<SignUpModal isShow={isShow} options={options} />);
      default:
        return null;
    }
  };

  render() {

    return (
      <React.Fragment>
        { this.renderModal() }
      </React.Fragment>
    );
  }
}

CommonModals.propTypes = {
  commonModals: PropTypes.object, // commonModals redux store
};

function mapStateToProps(state) {
  const { commonModals = {} } = state;
  return {
    commonModals,
  };
}

function mapDispatchToProps (dispatch) {
  return {};
}

const withReducer = injectReducer({ key: 'commonModals', reducer });

export default compose(
  withReducer,
)(CommonModals);
