import css from './AddToDo.module.css';
import { useState } from 'react'

import { IoMdAddCircleOutline } from "react-icons/io";
function AddToDo ({ hanldeOnClickAdd }) {

  let [addedTask, setAddedTask] = useState("")
  let [addedDate, setAddedDate] = useState("")
  const handleChangeTask = (event) => {
    setAddedTask(event.target.value)
  }

  const handleChangeDate = (event) => {
    setAddedDate(event.target.value)
  }

  const handleOnClick = () => {
    hanldeOnClickAdd(addedTask, addedDate)
    setAddedTask("")
    setAddedDate("")
  }  
  return  <div class="container text-center">
  <div class={`${css['my-row']} row`}>
    <div class="col-6">
      <input type="text" value={addedTask} onChange={handleChangeTask}  placeholder='Enter Todo here'  required/>
    </div>
    <div class="col-4">
      <input type="date" value={addedDate} onChange={handleChangeDate} required />
    </div>
    <div class="col-2">
      <button  class='btn btn-success' onClick={handleOnClick} > <IoMdAddCircleOutline /> </button>
    </div>
  </div>
</div>
}

export default AddToDo