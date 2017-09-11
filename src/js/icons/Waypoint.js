import React from 'react';

import Icon from '../Icon';

const Waypoint = props => (
  <Icon a11yTitle='Waypoint' {...props}>
    <polygon fill='none' stroke='#000' strokeWidth='2' points='3 11 11 13 13 21 21 3' />
  </Icon>
);

export default Waypoint;