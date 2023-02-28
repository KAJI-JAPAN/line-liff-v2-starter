import { useContext } from "react";
import { TodoResultContext } from "../providers/TodoResultProvider"

export const FinishedTodo = () => {
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  return(
    <>
      <div>Finished Todo</div>
      {
      todoResult.map((result, index) => (
        result.isCompleteFlag &&
        <div key={index}>
          <input
            type="checkbox"
            value={result.todo}
            id={result.todo}
            checked={result.isCompleteFlag}
            onChange={() => iscompleteCheked(index)}
          />
          <label htmlFor={result.todo}>{result.todo}</label>
        </div>
      ))}
    </>
  )
}