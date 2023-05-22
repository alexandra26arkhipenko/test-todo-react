import React from "react";
import classes from "./Header.module.css";
import todoImage from "../../../assets/todo.jpg";

const Header = () => {
  return (
    <header className={classes["todo-image"]}>
      <img src={todoImage} alt="plants" />
    </header>
  );
};

export default Header;
