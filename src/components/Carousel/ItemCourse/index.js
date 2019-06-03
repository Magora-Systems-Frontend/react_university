import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TooltipTrigger from 'react-popper-tooltip';
import { Popover } from './Popover';
import { Item } from './Item';
import lang from './lang.json';
import './item.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export class ItemCourse extends React.PureComponent {
  static propTypes = {
    languageState: PropTypes.object,
    data: PropTypes.object,
    id: PropTypes.string, //current category
  };

  static defaultProps = {
    languageState: {},
    data: {},
    id: '',
  };

  render() {
    const { data = {}, id = '', languageState = {} } = this.props;
    const { objective = [] } = data;
    const { language } = languageState; //variable pointing to current language

    const blockPopoverCourse = ({ tooltipRef, getTooltipProps }) => (
      <div {...getTooltipProps({ ref: tooltipRef })}>
        <Popover data={data} objective={objective} titles={lang[language]} id={id} />
      </div>
    );

    const blockItemCourse = ({ getTriggerProps, triggerRef }) => (
      <div {...getTriggerProps({ ref: triggerRef })}>
        <Item data={data} />
      </div>
    );

    return (
      <div className="course-item">
        <TooltipTrigger placement="auto" trigger="hover" tooltip={blockPopoverCourse}>
          {blockItemCourse}
        </TooltipTrigger>
      </div>
    );
  }
}
