import css from './AddToDo.module.css';
import { useContext } from 'react';
import { useRef } from 'react';

import { IoMdAddCircleOutline } from "react-icons/io";
import { DataContext } from '../store/data-store';
function AddToDo () {
  const { addNewItem } = useContext(DataContext)
  const taskElement = useRef();
  const dateElement = useRef();



  const handleOnClick = (event) => {
    event.preventDefault()
    const addedTask = taskElement.current.value;
    const addedDate = dateElement.current.value;
    taskElement.current.value = ""
    dateElement.current.value = ""
    addNewItem(addedTask, addedDate)
  }  
  return  <div className="container text-center">
  <form onSubmit={(e) => {handleOnClick(e)}} className={`${css['my-row']} row`}>
    <div className="col-6">
      <input type="text" ref={taskElement}   placeholder='Enter Todo here'  />
    </div>
    <div className="col-4">
      <input type="date" ref={dateElement} />
    </div>
    <div className="col-2">
      <button type='submit' className='btn btn-success'> <IoMdAddCircleOutline /> </button>
    </div>
  </form>
</div>
}

export default AddToDo