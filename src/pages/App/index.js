import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PT from 'prop-types';
//
import { Wrapper } from './index.styled';
import MainMenu from 'components/MainMenu';
import Header from 'components/Header';
import { CommonModals } from 'components';

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.PureComponent {
  render() {
    const { route } = this.props;

    return (
      <Wrapper>
        <Header />
        <CommonModals />
        <MainMenu style={{'textAlign': 'center'}} route={route} />
        {this.props.children}
        {/* Here could be header / footer / static blocks and etc */}
      </Wrapper>
    );
  }
}

function mapStateToProps(store = {}) {
  const { route } = store;
  return { route };
}

function mapDispatchToProps(dispatch) {
  return {};
}

App.propTypes = {
  children: PT.element.isRequired
};

export default App;
