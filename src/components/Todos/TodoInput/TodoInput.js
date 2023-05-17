import { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "../../UI/Card/Card";
import { todoActions } from "../../../store/todo";
import classes from "./TodoInput.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [enteredTodo, setEnteredTodo] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      return;
    }

    dispatch(todoActions.addTodo(enteredTodo));
  };

  const inputHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  return (
    <Card className={classes["todo-input"]}>
      <form onSubmit={onSubmitHandler}>
        <Checkbox isDisabled={true} checked={true}/>
        <input
          className={classes["text-input"]}
          type="text"
          onChange={inputHandler}
        ></input>
      </form>
    </Card>
  );
};

export default TodoInput;
