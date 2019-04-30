import React from 'react';
import { Helmet } from 'react-helmet';
import Section from '../HomePage';
import PropTypes from 'prop-types';
import injectReducer from '../../utils/injectReducer';
import reducer from '../HomePage/reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Registration } from '../../components/RegistrationForm/index';

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class RegistrationFormPage extends React.PureComponent {
  render() {
    return (
      <article>
        <Registration />
      </article>
    );
  }
}

RegistrationFormPage.propTypes = {
  loading: PropTypes.bool,
  onSubmitForm: PropTypes.func,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const withReducer = injectReducer({ key: 'RegistrationFormPage', reducer });

export default compose(withReducer)(RegistrationFormPage);
