import { useContext } from "react"
import { TodoResultContext } from "../providers/TodoResultProvider"
import { TodoList } from "./todoitem/TodoList";

export const ResultTodo = () => {
  const { todoResult } = useContext(TodoResultContext);
  return (
    <>
    {
      todoResult.map((result, index) => (
        !result.isCompleteFlag &&  <TodoList result={result} index={index} />
      ))}
    </>
  )
}