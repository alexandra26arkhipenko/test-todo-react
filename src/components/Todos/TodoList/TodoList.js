import { useSelector } from "react-redux";

import Card from "../../UI/Card";

import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Card className={classes.todos}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
