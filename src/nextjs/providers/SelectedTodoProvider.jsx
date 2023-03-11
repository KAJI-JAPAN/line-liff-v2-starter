import { createContext, useState } from "react";

export const SelectedTodoContext = createContext({});

export const SelectedTodoProvider = (props) => {
  const { children } = props
  const [selectedTodo, setSelectedTodo] = useState(null);
  return(
    <SelectedTodoContext.Provider value={{ selectedTodo, setSelectedTodo }}>
      { children }
    </SelectedTodoContext.Provider>
  )
}