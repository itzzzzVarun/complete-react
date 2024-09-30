import { createContext } from "react";


export const DataContext = createContext(
  {
    todoItems:[],
    addNewItem: () => {},
    deleteItem: () => {}
  }
);