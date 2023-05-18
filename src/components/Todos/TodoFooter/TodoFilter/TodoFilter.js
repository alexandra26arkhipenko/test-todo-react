import {
  TODO_FILTER_ACTIVE_BTN,
  TODO_FILTER_COMPLETED_BTN,
  TODO_FOOTER_FILTER_ALL,
} from "../../../../constants/constants";
import Button from "../../../UI/Button/Button";

const TodoFilter = (props) => {
  const clickHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div>
      <Button
        type="button"
        onClick={clickHandler}
        value={TODO_FOOTER_FILTER_ALL}
      >
        {TODO_FOOTER_FILTER_ALL}
      </Button>
      <Button
        type="button"
        onClick={clickHandler}
        value={TODO_FILTER_ACTIVE_BTN}
      >
        {TODO_FILTER_ACTIVE_BTN}
      </Button>
      <Button
        type="button"
        onClick={clickHandler}
        value={TODO_FILTER_COMPLETED_BTN}
      >
        {TODO_FILTER_COMPLETED_BTN}
      </Button>
    </div>
  );
};

export default TodoFilter;
