import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import Section from './Section';
import reducer from './reducer';
import { FindCourse, Advantages } from 'components';

const withReducer = injectReducer({ key: 'home', reducer });

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@compose(withReducer)
export class HomePage extends React.PureComponent {
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
        <Helmet>
          <title>Courses</title>
          <meta name="description" content="Notes" />
        </Helmet>
        <FindCourse />
        <Advantages />
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
