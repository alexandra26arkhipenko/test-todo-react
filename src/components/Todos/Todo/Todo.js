import classes from "./Todo.module.css";

const Todo = (props) => {
  return (
    <li>
      <div >
        <input type="checkbox" className={classes.round} />
      </div>
      <div>{props.text}</div>
      <div>
        <button>X</button>
      </div>
    </li>
  );
};

export default Todo;
