import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Card from "../../UI/Card/Card";
import Todo from "../Todo/Todo";
import TodoFooter from "../TodoFooter/TodoFooter";
import { todoActions } from "../../../store/todo";

import classes from "./TodoList.module.css";
import {
  TODO_FILTER_ACTIVE_BTN,
  TODO_FILTER_COMPLETED_BTN,
  TODO_LIST_NOTHING_HERE,
} from "../../../constants/constants";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    switch (filter) {
      case TODO_FILTER_ACTIVE_BTN:
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      case TODO_FILTER_COMPLETED_BTN:
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, filter]);

  const filterHandler = (filterType) => {
    dispatch(todoActions.filterTodos(filterType));
  };

  const handleOnDragEnd = (result) => {
    const items = [...filteredTodos];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilteredTodos(items);
  };

  return (
    <Card className={classes.todos}>
      {filteredTodos.length === 0 && <h3>{TODO_LIST_NOTHING_HERE}</h3>}
      {filteredTodos.length !== 0 && (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTodos.map((todo, index) => (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    index={index}
                    isCompleted={todo.isCompleted}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
      <TodoFooter
        onFilter={filterHandler}
        activeTodosCount={
          filteredTodos.filter((todo) => !todo.isCompleted).length
        }
      />
    </Card>
  );
};

export default TodoList;
