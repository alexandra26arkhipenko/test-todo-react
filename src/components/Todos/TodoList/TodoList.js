import { useSelector } from "react-redux";

import Card from "../../UI/Card/Card";

import classes from "./TodoList.module.css";
import Todo from "../Todo/Todo";

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
    </Card>
  );
};

export default TodoList;
