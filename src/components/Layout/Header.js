import classes from "./Header.module.css";
import todoImage from "../../assets/todo.jpg";

const Header = () => {
  return (
    <div className={classes['todo-image']}>
      <img src={todoImage} />
    </div>
  );
};

export default Header;
