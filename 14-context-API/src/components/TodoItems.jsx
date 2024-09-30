import { useContext } from "react";
import { DataContext } from "../store/data-store";
import ToDoItem from "./TodoItem";
import css from './ToDoItems.module.css'
const TodoItems = () => {
    const {todoItems, deleteItem } = useContext(DataContext);



  return (
    <>
      <div className={`${css['items-container']}`}>
        {todoItems.map((item) => (
        <ToDoItem key={item.date} task = {item.task} date = {item.date}  hanldeOnClickDelete={deleteItem}></ToDoItem>
        ))}
      </div>
    </>
  )
}

export default TodoItems;