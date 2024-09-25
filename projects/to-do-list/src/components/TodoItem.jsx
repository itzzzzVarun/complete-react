import css from './AddToDo.module.css';

function ToDoItem ({ task, date }) {
  return <div className="container">
  <div className={`${css['my-row']} row`}>
    <div className="col-6">
      {task}
    </div>
    <div className="col-4">
      {date}
    </div>
    <div className="col-2">
      <input type="button" className='btn btn-danger' value="Delete" />
    </div>
  </div>
</div>
}

export default ToDoItem