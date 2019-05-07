import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Registration } from 'components';
import reducer from '../HomePage/reducer';

const withReducer = injectReducer({ key: 'RegistrationFormPage', reducer });

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@compose(withReducer)
export class RegistrationFormPage extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    onSubmitForm: PropTypes.func,
  };

  static defaultProps = {
    loading: false,
    onSubmitForm: Function.prototype,
  };

  render() {
    return (
      <article>
        <Registration />
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
