import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Todo from "./Todo";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { todoActions } from "../../../store/todo";
import { TODO_DELETE_BTN_TEXT } from "../../../constants/constants";

const filteredTodos = [{ id: "1", text: "text", isCompleted: false }];
const mockStore = configureMockStore();
const store = mockStore({});

describe("Todo", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <DragDropContext>
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
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should make todo complited when checkbox is clicked", () => {
    render(
      <Provider store={store}>
        <DragDropContext>
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
      </Provider>
    );

    fireEvent.click(screen.getByRole("checkbox"));

    expect(store.getActions()).toContainEqual(todoActions.compliteTodo("1"));
  });

  it("should delete when delete button is clicked", () => {
    render(
      <Provider store={store}>
        <DragDropContext>
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
      </Provider>
    );

    fireEvent.click(screen.getByText(TODO_DELETE_BTN_TEXT));

    expect(store.getActions()).toContainEqual(todoActions.deleteTodo("1"));
  });
});
