/* eslint-disable jsx-a11y/href-no-hash */
import React, { PropTypes } from 'react';


const Link = ({ active, children, onClick }) =>
  (active ?
    (<span>{children}</span>) :
    (<a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>));

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

module.exports = Link;
