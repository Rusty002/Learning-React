function TodoItem1() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">4/10/23</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
