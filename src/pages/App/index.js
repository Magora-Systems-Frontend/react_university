import React from 'react';
import PT from 'prop-types';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Wrapper } from './index.styled';

export class App extends React.PureComponent {
  static propTypes = {
    children: PT.element.isRequired,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <Wrapper>
        <Header />
        {this.props.children}
        {/* Here could be header / footer / static blocks and etc */}
        <Footer />
      </Wrapper>
    );
  }
}
