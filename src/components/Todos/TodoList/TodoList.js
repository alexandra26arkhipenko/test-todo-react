import { useSelector } from "react-redux";

import Card from "../../UI/Card";

import classes from "./TodoList.module.css";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Card className={classes.todos}>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
