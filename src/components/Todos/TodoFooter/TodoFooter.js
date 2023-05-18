import { useSelector } from "react-redux";

import {
    TODO_FOOTER_ITEMS_LEFT,
    TODO_FOOTER_WELL_DONE,
  } from "../../../constants/constants";

import classes from "./TodoFooter.module.css";
import TodoFilter from "./TodoFilter/TodoFilter";

const TodoFooter = () => {
  const todos = useSelector((state) => state.todos);

  const spanValue =
    todos.filter((x) => !x.isComplited).length === 0
      ? TODO_FOOTER_WELL_DONE
      : `${
          todos.filter((x) => !x.isComplited).length
        } ${TODO_FOOTER_ITEMS_LEFT}`;

  return (
    <div className={classes.footer}>
      <span>{spanValue}</span>
      <TodoFilter />
    </div>
  );
};

export default TodoFooter;
