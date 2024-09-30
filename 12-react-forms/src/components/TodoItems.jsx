import ToDoItem from "./TodoItem";
import css from './ToDoItems.module.css'
const TodoItems = ({ TodoItems, hanldeOnClickDelete }) => {
  
  return (
    <>
      <div className={`${css['items-container']}`}>
        {TodoItems.map((item) => (
        <ToDoItem key={item.date} task = {item.task} date = {item.date}  hanldeOnClickDelete={hanldeOnClickDelete}></ToDoItem>
        ))}
      </div>
    </>
  )
}

export default TodoItems;