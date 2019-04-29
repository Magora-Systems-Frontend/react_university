import React from 'react';
import PropTypes from 'prop-types';

require('./icon.sass');

const GLYPH = {};

GLYPH.ARROW = require('./glyphs/arrow.svg').default;
GLYPH.CALENDAR = require('./glyphs/calendar.svg').default;
GLYPH.DEFAULT_AVATAR = require('./glyphs/default-avatar.svg').default;
GLYPH.DOUBLE_ARROW = require('./glyphs/double-arrow.svg').default;

const Icon = ({
  className,
  glyph,
  fill,
  height,
  stroke,
  strokeWidth,
  width,
}) => {
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
  glyph: PropTypes.any,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export { Icon, GLYPH };
