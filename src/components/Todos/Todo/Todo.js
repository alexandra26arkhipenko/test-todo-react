import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";

import classes from "./Todo.module.css";

const Todo = (props) => {
  const deleteHandler = () => {};

  return (
    <li>
      <div className={classes.checkbox}>
        <Checkbox />
      </div>
      <div className={classes.text}>{props.text}</div>
      <Button type="button" className={classes.delete} onClick={deleteHandler}>
        X
      </Button>
    </li>
  );
};

export default Todo;
