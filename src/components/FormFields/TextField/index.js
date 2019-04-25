import React from 'react';
import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form';
import { Input } from 'antd';
import { AbsolutePositioningError } from '../_CommonFieldsComponents/AbsolutePositioningError';

//

export class TextField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const {
      meta,
      input,
    } = this.props;

    return (
      <div className="text-field">
        <Input
          {...this.props}
          {...input}
        />
        {meta.error && meta.touched
          ? <AbsolutePositioningError>{meta.error}</AbsolutePositioningError> : null
        }
      </div>
    );
  }
}
