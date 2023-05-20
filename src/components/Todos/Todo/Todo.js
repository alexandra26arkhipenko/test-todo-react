import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";
import { TODO_DELETE_BTN_TEXT } from "../../../constants/constants";
import { todoActions } from "../../../store/todo";

import classes from "./Todo.module.css";

const Todo = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(todoActions.deleteTodo(props.id));
  };

  const checkboxHandler = () => {
    dispatch(todoActions.compliteTodo(props.id));
  };

  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Checkbox checked={props.isCompleted} onChange={checkboxHandler} />
          <div
            className={`${classes.text} ${
              props.isCompleted && classes.crossed
            }`}
          >
            {props.text}
          </div>
          <Button
            type="button"
            className={classes.delete}
            onClick={deleteHandler}
          >
            {TODO_DELETE_BTN_TEXT}
          </Button>
        </li>
      )}
    </Draggable>
  );
};

Todo.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  isCompleted: PropTypes.bool,
  text: PropTypes.string
};

export default Todo;
