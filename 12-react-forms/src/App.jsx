
import AppName from './components/AppName'
import AddToDo from './components/AddToDo'
import TodoItems from './components/TodoItems'
import WelcomeMsg from './components/WelcomeMsg'
import './App.css'
import { useState } from 'react'


function App() {

  const [data, setData] = useState([]);

 

  
  const handleDelete = (task) => {
    const newData = data.filter(item => item.task != task)
    setData(newData)
  }





  const handleAdd = (addedTask, addedDate) => {  setData((currValue) => [...currValue, {task: addedTask, date: addedDate}])
  }


  return <center className='todo-container'>
      <AppName />   
      <AddToDo hanldeOnClickAdd = {handleAdd}  />
      {data.length === 0 && <WelcomeMsg ></WelcomeMsg>}
      <TodoItems TodoItems = {data} hanldeOnClickDelete={handleDelete}></TodoItems>
  </center>
}

export default App
