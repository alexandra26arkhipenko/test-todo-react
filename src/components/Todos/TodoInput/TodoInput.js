import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "../../UI/Card/Card";
import { todoActions } from "../../../store/todo";
import classes from "./TodoInput.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";
import { TODO_INPUT_PLACEHOLDER } from "../../../constants/constants";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [enteredTodo, setEnteredTodo] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      return;
    }

    dispatch(todoActions.addTodo(enteredTodo));
    setEnteredTodo('');
  };

  const inputHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  return (
    <Card className={classes["todo-input"]}>
      <form aria-label="form" onSubmit={onSubmitHandler}>
        <Checkbox isDisabled={true} checked={true}/>
        <input
          placeholder={TODO_INPUT_PLACEHOLDER}
          className={classes["text-input"]}
          type="text"
          onChange={inputHandler}
          value={enteredTodo}
        ></input>
      </form>
    </Card>
  );
};

export default TodoInput;
