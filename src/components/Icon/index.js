import React from 'react';
import PropTypes from 'prop-types';

require('./icon.sass');

const GLYPH = (title) => {
  console.log(title);
  return require('assets/icons/edit.svg').default;
};

const Icon = ({ className, glyph, fill, height, stroke, strokeWidth, width }) => {
  console.log(glyph);
  const icon = require('assets/icons/edit.svg').default;
  console.log(icon);
  // console.log(require(glyph));
  return (
    <svg
      stroke={stroke}
      strokeWidth={`${strokeWidth}px`}
      height={`${height}px`}
      width={`${width}px`}
      fill={fill}
      className={`svg-icon ${className}`}
      dangerouslySetInnerHTML={{
        __html: `<use xlink:href="#${glyph.id}"/>`,
      }}
    />
  );
};

Icon.defaultProps = {
  className: null,
  glyph: null,
  fill: '#3b393a',
  height: 20,
  stroke: null,
  strokeWidth: null,
  width: 20,
};

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  glyph: PropTypes.any.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export { Icon, GLYPH };
