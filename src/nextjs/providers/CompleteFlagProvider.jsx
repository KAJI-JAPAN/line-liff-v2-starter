import { createContext, useState } from "react";

export const CompleteFlagContext = createContext({})

export const CompleteFlagProvider = (props) => {
  const { children } = props
  const [isCompleteFlag, setisCompleteFlag] = useState(false);
  return(
    <CompleteFlagContext.Provider value={{ isCompleteFlag, setisCompleteFlag }}>
      { children }
    </CompleteFlagContext.Provider>
  )
}