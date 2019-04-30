import React from 'react';
// import PropTypes from 'prop-types';
import {fieldPropTypes} from 'redux-form';
import {Button, Form, Icon, Modal, Upload} from 'antd';

export class FileField extends React.PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
  };

  static propTypes = {
    ...fieldPropTypes,
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  render() {
    const { label, meta, /*input, action,*/ change } = this.props;

    const { previewVisible, previewImage } = this.state;

    const inputElement = Upload;
    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return (
      <Form.Item label={label} validateStatus={validateStatus} help={help}>
        {React.createElement(
          inputElement,
          { ...this.props, onChange: change, onPreview: this.handlePreview, listType: 'picture-card' },
          React.createElement(Button, {}, React.createElement(Icon, { type: 'upload' }), 'Upload')
        )}
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Form.Item>
    );
  }
}
