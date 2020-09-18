import React from 'react';
import { Link } from 'react-scroll';

const SmoothScrollLink = props => {
  const { classes, targetId, offset, children } = props;
  return (
    <Link
      className={classes}
      style={{ cursor: 'pointer' }}
      activeClass='active'
      to={targetId}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
