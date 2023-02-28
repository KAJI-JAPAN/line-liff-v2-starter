import { createContext, useState } from "react";

export const TodoResultContext = createContext({});

export const TodoResultProvider = (props) => {
  const { children } = props
  const [todoResult, setTodoResult] = useState([]);
  return(
    <TodoResultContext.Provider value={{ todoResult, setTodoResult }}>
      { children }
    </TodoResultContext.Provider>
  )
}