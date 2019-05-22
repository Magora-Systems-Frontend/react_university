import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments } from '../../pages/HomePage/actions';

import './index.scss';
import { Carousel } from '../Carousel';

const mapStateToProps = ({ commentsState }) => ({
  commentsState,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: bindActionCreators(getComments, dispatch),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class Comments extends React.PureComponent {
  static propTypes = {
    commentsState: PropTypes.object,
    getComments: PropTypes.func,
  };

  static defaultProps = {
    commentsState: {},
    getComments: Function.prototype,
  };

  async componentDidMount() {
    await this.props.getComments();
  }

  render() {
    const { commentsState } = this.props;
    const { payload = [] } = commentsState;
    const options = {
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="comments">
        <div className="comments__wrapper">
          <div className="comments__wrapper_title">What our students have to say</div>
          <Carousel id="comments" data={payload} options={options} typeItem="comments" />
        </div>
      </div>
    );
  }
}
