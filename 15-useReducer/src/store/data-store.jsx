import { createContext } from "react";
import { useReducer } from 'react'
export const DataContext = createContext(
  {
    todoItems:[],
    addNewItem: () => {},
    deleteItem: () => {}
  }
);



const TodoItemContextProvider = ({ children }) => {

  const todoItemReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems, {task: action.payload.task, date: action.payload.date}
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter(item => item.task != action.payload.task)
    }
    return newTodoItems
  }


    const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [])

    const handleDelete = (addedTask) => {
      const deleteItemAction = {
        type: "DELETE_ITEM",
        payload: {
          task: addedTask,
        }
      }
      dispatchTodoItems(deleteItemAction)
    }
  
  
    const handleAdd = (addedTask, addedDate) => { 
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          task: addedTask,
          date: addedDate
        }
      }
      dispatchTodoItems(newItemAction)
    }

    return (
      <DataContext.Provider value={{
        todoItems:todoItems,
        addNewItem: handleAdd,
        deleteItem: handleDelete
      }}>
        {children}
        </ DataContext.Provider>
    )
}

export default TodoItemContextProvider