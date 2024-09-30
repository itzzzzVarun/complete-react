import css from './AddToDo.module.css';
import { useRef } from 'react';


import { IoMdAddCircleOutline } from "react-icons/io";
function AddToDo ({ hanldeOnClickAdd }) {


  let taskElement = useRef()
  let dateElement = useRef()


  const handleOnClick = (event) => {
    event.preventDefault()
    let addedTask = taskElement.current.value;
    let addedDate = dateElement.current.value;
    taskElement.current.value = ""
    dateElement.current.value = ""
    hanldeOnClickAdd(addedTask, addedDate)
  }  
  return  <div className="container text-center">
  <form onSubmit={(e) => {handleOnClick(e)}} className={`${css['my-row']} row`}>
    <div class="col-6">
      <input type="text" ref={taskElement} placeholder='Enter Todo here'  />
    </div>
    <div class="col-4">
      <input type="date" ref={dateElement}  />
    </div>
    <div class="col-2">
      <button type='submit' className='btn btn-success'> <IoMdAddCircleOutline /> </button>
    </div>
  </form>
</div>
}

export default AddToDo