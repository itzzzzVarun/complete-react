import { useContext } from 'react';
import css from './AddToDo.module.css';
import { MdDeleteForever } from "react-icons/md";
import { DataContext } from '../store/data-store';

function ToDoItem ({ task, date })  {
  const { deleteItem } = useContext(DataContext)

  return <div className="container">
  <div className={`${css['my-row']} row`}>
    <div className="col-6">
      {task}
    </div>
    <div className="col-4">
      {date}
    </div>
    <div className="col-2">
      <button className='btn btn-danger' onClick={() => deleteItem(task)}  > <MdDeleteForever /></button>
    </div>
  </div>
</div>
}

export default ToDoItem