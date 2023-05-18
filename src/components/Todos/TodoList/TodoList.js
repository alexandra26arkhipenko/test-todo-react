import { useSelector } from "react-redux";

import Card from "../../UI/Card/Card";
import Todo from "../Todo/Todo";
import TodoFooter from "../TodoFooter/TodoFooter";

import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Card className={classes.todos}>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isComplited={todo.isComplited}
          />
        ))}
      </ul>
      <TodoFooter />
    </Card>
  );
};

export default TodoList;
