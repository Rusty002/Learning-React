import { useContext, useRef, type BaseSyntheticEvent } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({ onNewItem }: any) {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButtonClicked = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
