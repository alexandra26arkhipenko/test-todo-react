import { Fragment } from "react";

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import TodoList from "./components/Todos/TodoList/TodoList";

function App() {
  return (
    <Fragment>
      <Header />
      <TodoList/>
      <Footer />
    </Fragment>
  );
}

export default App;
