import { useContext } from "react"
import { TodoResultContext } from "../providers/TodoResultProvider"
import { TodoList } from "./todoitem/TodoList";

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
        !result.isCompleteFlag &&  <TodoList result={result} index={index} />
      ))}
    </>
  )
}