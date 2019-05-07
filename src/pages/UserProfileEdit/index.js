import React from 'react';
import PropTypes from 'prop-types';
import { EditProfile } from 'components';

export class UserProfileEditPage extends React.PureComponent {
  static propTypes = {
    match: PropTypes.object,
  };

  static defaultProps = {
    match: {},
  };

  async componentDidMount() {
    // const { match } = this.props;
    // const { params } = match;
    // const { id: userId } = params;
  }

  render() {
    return <EditProfile />;
  }
}
