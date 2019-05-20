import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: 400px;
  height: 100%;
  display: flex;
`;

Wrapper.propTypes = {
  margin: PropTypes.string,
  padding: PropTypes.string,
};
