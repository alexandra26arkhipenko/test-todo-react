import Checkbox from "../../UI/Checkbox/Checkbox";
import classes from "./Todo.module.css";

const Todo = (props) => {
  return (
    <li>
      <div className={classes.checkbox}>
        <Checkbox />
      </div>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.delete}> 
        <button>X</button>
      </div>
    </li>
  );
};

export default Todo;
