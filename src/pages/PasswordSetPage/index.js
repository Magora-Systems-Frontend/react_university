import React, { PureComponent } from 'react';
import injectReducer from "../../utils/injectReducer";
import reducer from "../HomePage/reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import { PasswordSet } from '../../components/PasswordSet';

@connect(mapStateToProps, mapDispatchToProps)
class PasswordSetPage extends PureComponent {
  render() {
    return (
      <PasswordSet/>
    )
  }
}


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

const withReducer = injectReducer({ key: 'PasswordSetPage', reducer });

export default compose(withReducer)(PasswordSetPage)
