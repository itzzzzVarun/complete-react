
import AppName from './components/AppName'
import AddToDo from './components/AddToDo'
import TodoItems from './components/TodoItems'
import './App.css'


function App() {
  let task = "Buy Milk"
  let date = "4/10/2023"
  const data = [{
    task : "Buy Milk",
    date : "04/10/2023",
  }, 
  {
    task : "Go to College",
    date : "05/10/2023"
  },
  {
    task : "Hey Hello",
    date : "Right Now"
  }

]
  return <center className='todo-container'>
      <AppName />   
      <AddToDo />
      <TodoItems TodoItems = {data}></TodoItems>
  </center>
}

export default App
