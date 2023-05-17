import { Fragment } from "react";

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import TodoList from "./components/Todos/TodoList/TodoList";
import TodoInput from "./components/Todos/TodoInput/TodoInput";

function App() {
  return (
    <Fragment>
      <Header />
      <TodoInput />
      <TodoList/>
      <Footer />
    </Fragment>
  );
}

export default App;
