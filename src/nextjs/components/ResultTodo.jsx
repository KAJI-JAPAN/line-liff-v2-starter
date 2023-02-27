import { useContext } from "react"
import { TodoResultContext } from "../providers/TodoResultProvider"

export const ResultTodo = () => {
  const { todoResult } = useContext(TodoResultContext);
  return (
    <>
    {
      todoResult.map((result, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={result.todo}
            id={result.todo}
          />
          <label htmlFor={result.todo}>{result.todo}</label>
        </div>
      ))}
    </>
  )
}