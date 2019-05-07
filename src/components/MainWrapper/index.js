import React from 'react';
import { Wrapper } from './index.styled';
import PT from 'prop-types';

export const MainWrapper = (props) => <Wrapper>{props.children}</Wrapper>;

MainWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.array]),
};
