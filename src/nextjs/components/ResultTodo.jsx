import { useContext } from "react"
import { TodoResultContext } from "../providers/TodoResultProvider"
import { TodoList } from "./todoitem/TodoList";

export const ResultTodo = () => {
  const { todoResult } = useContext(TodoResultContext);
  const incompleteTodos = todoResult.filter(todo => !todo.isCompleteFlag)
  if(incompleteTodos.length === 0) {
    return null
  }

  return (
    <>
      <TodoList result={incompleteTodos}  />
    </>
  )
}