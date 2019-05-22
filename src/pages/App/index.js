import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { loadStore, KEYS } from 'utils/localStorage';
//
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Wrapper } from './index.styled';
import { setAuthState } from './actions';

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class App extends React.PureComponent {
  static propTypes = {
    children: PT.element.isRequired,
    setAuthState: PT.func,
  };

  static defaultProps = {
    children: '',
  };

  componentDidMount() {
    this.props.setAuthState(loadStore(KEYS.AUTH));
  }

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

function mapStateToProps(store = {}) {
  const { route } = store;
  return { route };
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthState: bindActionCreators(setAuthState, dispatch),
  };
}
