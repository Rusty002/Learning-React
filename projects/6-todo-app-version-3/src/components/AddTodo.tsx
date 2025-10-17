import { useState, type BaseSyntheticEvent } from "react";

function AddTodo({ onNewItem }: any) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleTodoInputNameChange = (event: BaseSyntheticEvent) => {
    setTodoName(event.target.value);
  };

  const handleTodoInputDateChange = (event: BaseSyntheticEvent) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleTodoInputNameChange}
            value={todoName}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={handleTodoInputDateChange}
          />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddButtonClicked}
            type="button"
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
