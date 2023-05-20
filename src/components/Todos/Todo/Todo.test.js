import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const filteredTodos = [{ id: "1", text: "text", isCompleted: false }];

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
});
