import { useSelector } from "react-redux";

import Card from "../../UI/Card/Card";
import Todo from "../Todo/Todo";
import TodoFooter from "../TodoFooter/TodoFooter";

import classes from "./TodoList.module.css";
import {
  TODO_FILTER_ACTIVE_BTN,
  TODO_FILTER_COMPLETED_BTN,
} from "../../../constants/constants";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filteredTodos = useSelector((state) => {
    switch (state.filter) {
      case TODO_FILTER_ACTIVE_BTN:
        return todos.filter((todo) => !todo.isCompleted);
      case TODO_FILTER_COMPLETED_BTN:
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  });

  return (
    <Card className={classes.todos}>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
      <TodoFooter />
    </Card>
  );
};

export default TodoList;
