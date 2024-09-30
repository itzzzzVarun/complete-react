
import AppName from './components/AppName'
import AddToDo from './components/AddToDo'
import TodoItems from './components/TodoItems'
import WelcomeMsg from './components/WelcomeMsg'
import TodoItemContextProvider from './store/data-store'
import './App.css'



function App() {
  return (
    <TodoItemContextProvider>
     <center className='todo-container'>
      <AppName />   
      <AddToDo />
      <WelcomeMsg />
      <TodoItems />
    </center>
    </TodoItemContextProvider> 
  )
}

export default App
