import { useDispatch } from "react-redux";

import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";
import { TODO_DELETE_BTN_TEXT } from "../../../constants/constants";
import { todoActions } from "../../../store/todo";

import classes from "./Todo.module.css";

const Todo = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(todoActions.deleteTodo(props.id));
  };

  const checkboxHandler = () => {
    dispatch(todoActions.compliteTodo(props.id));
  };

  return (
    <li>
      <Checkbox checked={props.isComplited} onChange={checkboxHandler} />
      <div
        className={`${classes.text} ${props.isComplited && classes.crossed}`}
      >
        {props.text}
      </div>
      <Button type="button" className={classes.delete} onClick={deleteHandler}>
        {TODO_DELETE_BTN_TEXT}
      </Button>
    </li>
  );
};

export default Todo;
