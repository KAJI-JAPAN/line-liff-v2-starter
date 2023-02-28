import { useContext } from "react"
import { TodoResultContext } from "../providers/TodoResultProvider"

export const ResultTodo = () => {
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  const iscompleteCheked = (index) => {
    const checkedTodo = todoResult.map((todo, todoIndex) => {
      if (index === todoIndex) {
        todo.isCompleteFlag = !todo.isCompleteFlag
      }
      return todo
    })
    setTodoResult(checkedTodo)
  }
  console.log(todoResult)
  return (
    <>
    {
      todoResult.map((result, index) => (
        !result.isCompleteFlag &&
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