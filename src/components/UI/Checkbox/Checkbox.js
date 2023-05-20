import React from "react";
import PropTypes from "prop-types";
import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <input
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
      className={classes.round}
      disabled={props.isDisabled}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default Checkbox;
