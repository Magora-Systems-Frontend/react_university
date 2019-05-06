import React from 'react';
import PropTypes from 'prop-types';
import { EditProfile } from 'components';

class UserProfileEditPage extends React.PureComponent {
  async componentDidMount() {
    // const { match } = this.props;
    // const { params } = match;
    // const { id: userId } = params;
  }

  render() {
    return <EditProfile />;
  }
}

UserProfileEditPage.propTypes = {
  match: PropTypes.object,
};

export default UserProfileEditPage;
