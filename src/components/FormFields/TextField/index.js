import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { Input, Form, InputNumber } from 'antd';
import ReactInputMask from 'react-input-mask';
//

const InputMask = (props) => {
  return (
    <ReactInputMask {...props}>
      { (inputProps) => <Input {...inputProps} disabled={props.disabled ? props.disabled : null} /> }
    </ReactInputMask>
  );
};

export class TextField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const {
      label,
      meta,
      input,
      type,
    } = this.props;
    // console.log(this.props);

    let inputElement;
    switch (type) {
      case ('password'):
        inputElement = Input.Password;
        break;
      case ('code'):
        inputElement = InputNumber;
        break;
      case ('mask'):
        inputElement = InputMask;
        break;
      default:
        inputElement = Input
    }

    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return(
      <Form.Item
        label={label}
        validateStatus={validateStatus}
        help={help}
      >
        {React.createElement(inputElement, { ...this.props, ...input })}
      </Form.Item>
    );
  }
}
