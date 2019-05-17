import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
`;

Wrapper.propTypes = {
  margin: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};
