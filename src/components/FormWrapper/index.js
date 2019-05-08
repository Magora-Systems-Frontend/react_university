import React from 'react';
import PT from 'prop-types';
import { Wrapper } from './index.styled';

export const FormWrapper = (props) => <Wrapper>{props.children}</Wrapper>;

FormWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.array]),
};
