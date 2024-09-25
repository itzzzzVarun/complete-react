import ToDoItem from "./TodoItem";
import css from './ToDoItems.module.css'
const TodoItems = ({ TodoItems }) => {
  return (
    <>
      <div className={`${css['items-container']}`}>
        {TodoItems.map((item) => (
        <ToDoItem key={item.date} task = {item.task} date = {item.date}></ToDoItem>
        ))}
      </div>
    </>
  )
}

export default TodoItems;