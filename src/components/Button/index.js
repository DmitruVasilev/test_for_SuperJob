import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.sass";

const Button = ({ children, type, onButtonClick, className }) => (
  <button
    className={classNames(["button", !!className && className])}
    type={type}
    onClick={onButtonClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onButtonClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  type: "button",
  className: null,
  onButtonClick: null
};

export default Button;
