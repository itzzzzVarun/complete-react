
import AppName from './components/AppName'
import AddToDo from './components/AddToDo'
import TodoItems from './components/TodoItems'
import WelcomeMsg from './components/WelcomeMsg'
import './App.css'
import { useState } from 'react'
import { DataContext } from './store/data-store'


function App() {

  const [data, setData] = useState([]);

 

  
  const handleDelete = (task) => {
    const newData = data.filter(item => item.task != task)
    setData(newData)
  }





  const handleAdd = (addedTask, addedDate) => {  setData((currValue) => [...currValue, {task: addedTask, date: addedDate}])
  }


  return (
    <DataContext.Provider value={{
      todoItems:data,
      addNewItem: handleAdd,
      deleteItem: handleDelete
    }}>
     <center className='todo-container'>
      <AppName />   
      <AddToDo />
       <WelcomeMsg />
      <TodoItems />
  </center>
</DataContext.Provider>
  )
}

export default App
