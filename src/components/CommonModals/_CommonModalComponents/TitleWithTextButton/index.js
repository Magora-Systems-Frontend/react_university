import React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const TitleWithTextButton = props => (
  <div className="common-modal-twtb">
    <div>{props.title}</div>
    <div className="common-modal-twtb__button" onClick={props.onClick}>
      {props.btnText}
    </div>
  </div>
);

TitleWithTextButton.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TitleWithTextButton;
