import { createContext, useState } from "react";

export const TodoModalFlagContext = createContext({});

export const TodoModalFlagProvider = (props) => {
  const { children } = props
  const [isTodoModal, setIsTodoModal] = useState(false);
  return(
    <TodoModalFlagContext.Provider value={{ isTodoModal, setIsTodoModal }}>
      { children }
    </TodoModalFlagContext.Provider>
  )
}