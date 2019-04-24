import React from 'react';
import { Button } from 'antd';
//

import './header-controls.sass';

class HeaderControls extends React.PureComponent {

  render() {
    return (
      <div className="header-controls">
        <Button type="primary">Log in</Button>
        <Button type="primary">Sign up</Button>
      </div>
    );
  }
}

export default HeaderControls;
