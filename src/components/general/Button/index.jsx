import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ children, to }) => {
  return (
    <a href={to} className="button">
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

Button.defaultProps = {
  to: '#',
};

export default Button;
