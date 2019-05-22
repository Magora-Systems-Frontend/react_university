import React from 'react';
import PT from 'prop-types';
import { Wrapper } from './index.styled';

export const MainWrapper = (props) => <Wrapper>{props.children}</Wrapper>;

MainWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.array]),
};
