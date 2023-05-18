import { useDispatch } from "react-redux";
import {
  TODO_FILTER_ACTIVE_BTN,
  TODO_FILTER_COMPLETED_BTN,
  TODO_FOOTER_FILTER_ALL,
} from "../../../../constants/constants";
import Button from "../../../UI/Button/Button";
import { todoActions } from "../../../../store/todo";

import classes from "./TodoFilter.module.css";

const TodoFilter = () => {
  const dispatch = useDispatch();

  const activeFilterHandler = () => {
    dispatch(todoActions.filterTodos(TODO_FILTER_ACTIVE_BTN));
  };

  const allFilterHandler = () => {
    dispatch(todoActions.filterTodos(TODO_FOOTER_FILTER_ALL));
  };

  const completedFilterHandler = () => {
    dispatch(todoActions.filterTodos(TODO_FILTER_COMPLETED_BTN));
  };

  return (
    <div className={classes.filter}>
      <Button type="button" onClick={allFilterHandler}>
        {TODO_FOOTER_FILTER_ALL}
      </Button>
      <Button type="button" onClick={activeFilterHandler}>
        {TODO_FILTER_ACTIVE_BTN}
      </Button>
      <Button type="button" onClick={completedFilterHandler}>
        {TODO_FILTER_COMPLETED_BTN}
      </Button>
    </div>
  );
};

export default TodoFilter;
