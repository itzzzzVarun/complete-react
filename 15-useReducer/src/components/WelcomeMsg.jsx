import { useContext } from 'react'
import css from './WelcomeMsg.module.css'
import { DataContext } from '../store/data-store'
const WelcomeMsg = () => {

  const contextObj = useContext(DataContext);
  const todoItems = contextObj.todoItems
  return (
    <> {todoItems.length === 0 &&       <h1 className={css.WelcomeMsg}>Enjoy your day...</h1> }
    </>
  )
}

export default WelcomeMsg