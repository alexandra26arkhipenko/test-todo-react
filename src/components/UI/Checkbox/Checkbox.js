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

export default Checkbox;
