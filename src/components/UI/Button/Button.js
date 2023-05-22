import React from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.any,
  value: PropTypes.any,
  children: PropTypes.any,
};

export default Button;
