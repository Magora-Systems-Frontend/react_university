import React from 'react';
import PropTypes from 'prop-types';

require('./icon.sass');

const GLYPH = {};

GLYPH.logo = require('/assets/images/logo.svg').default;
GLYPH.catalog = require('/assets/icons/catalog.svg').default;
GLYPH.shoppingCart = require('/assets/icons/shoppingCart.svg').default;
GLYPH.menu = require('/assets/icons/menu.svg').default;
GLYPH.search = require('/assets/icons/search.svg').default;
GLYPH.edit = require('/assets/icons/edit.svg').default;
GLYPH.check = require('/assets/icons/check.svg').default;
GLYPH.clockCircle = require('/assets/icons/clockCircle.svg').default;
GLYPH.calculator = require('/assets/icons/calculator.svg').default;
GLYPH.barChart = require('/assets/icons/barChart.svg').default;
GLYPH.desktop = require('/assets/icons/desktop.svg').default;
GLYPH.dashboard = require('/assets/icons/dashboard.svg').default;
GLYPH.control = require('/assets/icons/control.svg').default;
GLYPH.lock = require('/assets/icons/lock.svg').default;
GLYPH.camera = require('/assets/icons/camera.svg').default;
GLYPH.sound = require('/assets/icons/sound.svg').default;
GLYPH.playCircle = require('/assets/icons/playCircle.svg').default;
GLYPH.project = require('/assets/icons/project.svg').default;
GLYPH.heart = require('/assets/icons/heart.svg').default;
GLYPH.arrowLeft = require('/assets/icons/arrowLeft.svg').default;
GLYPH.arrowRight = require('/assets/icons/arrowRight.svg').default;
GLYPH.profile = require('/assets/icons/profile.svg').default;
GLYPH.deployment = require('/assets/icons/deployment.svg').default;
GLYPH.environment = require('/assets/icons/environment.svg').default;
GLYPH.contacts = require('/assets/icons/contacts.svg').default;
GLYPH.gateway = require('/assets/icons/gateway.svg').default;
GLYPH.barChart = require('/assets/icons/barChart.svg').default;
GLYPH.form = require('/assets/icons/form.svg').default;
GLYPH.paperClip = require('/assets/icons/paperClip.svg').default;
GLYPH.wifi = require('/assets/icons/wifi.svg').default;
GLYPH.user = require('/assets/icons/user.svg').default;
GLYPH.shake = require('/assets/icons/shake.svg').default;

const Icon = ({ className, glyph, fill, height, stroke, strokeWidth, width }) => {
  if (!process.env.IS_BROWSER) {
    return null;
  }

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
  className: '',
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
