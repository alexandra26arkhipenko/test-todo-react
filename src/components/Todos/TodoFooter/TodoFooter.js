import { useDispatch } from "react-redux";

import {
  TODO_FOOTER_ITEMS_LEFT,
  TODO_FOOTER_WELL_DONE,
  TODO_FOOTER_CLEAR_COMPLETED,
} from "../../../constants/constants";
import TodoFilter from "./TodoFilter/TodoFilter";
import Button from "../../UI/Button/Button";
import { todoActions } from "../../../store/todo";

import classes from "./TodoFooter.module.css";

const TodoFooter = (props) => {
  const dispatch = useDispatch();

  const spanValue =
    props.activeTodosCount === 0
      ? TODO_FOOTER_WELL_DONE
      : `${props.activeTodosCount} ${TODO_FOOTER_ITEMS_LEFT}`;

  const deleteAllCompleted = () => {
    dispatch(todoActions.deleteAllCompletedTodos());
  };

  return (
    <div className={classes.footer}>
      <span>{spanValue}</span>
      <TodoFilter onFilter={props.onFilter} />
      <Button type="button" onClick={deleteAllCompleted}>
        {TODO_FOOTER_CLEAR_COMPLETED}
      </Button>
    </div>
  );
};

export default TodoFooter;
