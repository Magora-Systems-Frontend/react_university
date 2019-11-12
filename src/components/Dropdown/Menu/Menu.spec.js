import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Component, { FirstLevel, SecondLevel } from './index';

configure({ adapter: new Adapter() });

const data = [
  {
    title: 'Develop',
    icon: 'https://img.icons8.com/ios/50/000000/source-code-filled.png',
    subitems: [
      {
        title: 'All development',
      },
      {
        title: 'Web Development',
        subitems: [
          {
            title: 'Popular topics',
          },
          {
            title: 'JS',
          },
          {
            title: 'React',
          },
          {
            title: 'Angular',
          },
          {
            title: 'CSS',
          },
          {
            title: 'PHP',
          },
        ],
      },
      {
        title: 'Mobile apps',
        subitems: [
          {
            title: 'Popular topics',
          },
          {
            title: 'Kotlin',
          },
          {
            title: 'Xamarin',
          },
          {
            title: 'XCode',
          },
        ],
      },
    ],
  },
  {
    title: 'Business',
    icon: 'https://img.icons8.com/ios/50/000000/statistics.png',
    subitems: [
      {
        title: 'All Business',
      },
      {
        title: 'Finance',
        subitems: [
          {
            title: 'Popular topics',
          },
          {
            title: 'Finance analise',
          },
          {
            title: 'Statistics',
          },
        ],
      },
      {
        title: 'Networking',
        subitems: [
          {
            title: 'Popular topics',
          },
          {
            title: 'Prepare text',
          },
          {
            title: 'Public speak',
          },
        ],
      },
    ],
  },
  {
    title: 'IT',
    icon: 'https://img.icons8.com/pastel-glyph/50/000000/monitor.png',
  },
  {
    title: 'Design',
    icon: 'https://img.icons8.com/ios/50/000000/web-design.png',
  },
  {
    title: 'Marketing',
    icon: 'https://img.icons8.com/wired/50/000000/marketing.png',
  },
];

describe('component snapshot', () => {
  it('capturing snapshot of menu', () => {
    const renderedValue = renderer.create(<Component />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('capturing snapshot of first level', () => {
    const renderedValue = renderer.create(<FirstLevel />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('capturing snapshot of second level', () => {
    const renderedValue = renderer.create(<SecondLevel />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('Shallow render component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Component menu={data} />);
  });

  it('render component', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('Shallow render FirstLevel', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FirstLevel item={data[0]} />);
  });

  it('display sublevel', () => {
    wrapper.setState({ displaySecondLevel: true });
    expect(wrapper.find('.dropdown__menu-second-level')).toHaveLength(1);
  });

  it('Check handle mouse events', () => {
    wrapper.simulate('mouseenter');
    expect(wrapper.state()).toEqual({ displaySecondLevel: true });
    wrapper.simulate('mouseleave');
    expect(wrapper.state()).toEqual({ displaySecondLevel: false });
  });
});

describe('Shallow render SecondLevel', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SecondLevel item={data[0].subitems[1]} />);
  });

  it('display sublevel', () => {
    wrapper.setState({ displayThirdLevel: true });
    expect(wrapper.find('.dropdown__menu-third-level')).toHaveLength(1);
  });

  it('Check handle mouse events', () => {
    wrapper.simulate('mouseenter');
    expect(wrapper.state()).toEqual({ displayThirdLevel: true });
    wrapper.simulate('mouseleave');
    expect(wrapper.state()).toEqual({ displayThirdLevel: false });
  });
});
