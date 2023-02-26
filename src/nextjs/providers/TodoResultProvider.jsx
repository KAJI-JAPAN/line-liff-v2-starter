import { createContext, useState } from "react";

export const TodoResultContext = createContext({});

export const TodoResultProvider = (props) => {
  const { children } = props
  const [todoResult, seTodoResult] = useState([]);
  return(
    <TodoResultContext.Provider value={{ todoResult, seTodoResult }}>
      { children }
    </TodoResultContext.Provider>
  )
}