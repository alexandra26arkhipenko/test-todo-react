import React from "react";
import PropTypes from "prop-types";
import {
  TODO_FILTER_ACTIVE_BTN,
  TODO_FILTER_COMPLETED_BTN,
  TODO_FOOTER_FILTER_ALL,
} from "../../../../constants/constants";
import Button from "../../../UI/Button/Button";
import { useSelector } from "react-redux";
import classes from "./TodoFilter.module.css";

const TodoFilter = (props) => {
  const filter = useSelector((state) => state.filter);
  const clickHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div>
      <Button
        className={filter === TODO_FOOTER_FILTER_ALL && classes["button-light"]}
        type="button"
        onClick={clickHandler}
        value={TODO_FOOTER_FILTER_ALL}
      >
        {TODO_FOOTER_FILTER_ALL}
      </Button>
      <Button
        className={filter === TODO_FILTER_ACTIVE_BTN && classes["button-light"]}
        type="button"
        onClick={clickHandler}
        value={TODO_FILTER_ACTIVE_BTN}
      >
        {TODO_FILTER_ACTIVE_BTN}
      </Button>
      <Button
        className={
          filter === TODO_FILTER_COMPLETED_BTN && classes["button-light"]
        }
        type="button"
        onClick={clickHandler}
        value={TODO_FILTER_COMPLETED_BTN}
      >
        {TODO_FILTER_COMPLETED_BTN}
      </Button>
    </div>
  );
};

TodoFilter.propTypes = {
  onFilter: PropTypes.func,
};

export default TodoFilter;
