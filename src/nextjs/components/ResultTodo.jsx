import { memo, useContext, useMemo } from "react"
import { TodoResultContext } from "../providers/TodoResultProvider"
import { TodoList } from "./todoitem/TodoList";

export const ResultTodo = memo(() => {
  const { todoResult } = useContext(TodoResultContext);
  const incompleteTodos = useMemo(() => todoResult
  .map((todo, index) => ({ ...todo, originalIndex: index }))
  .filter(todo => !todo.isCompleteFlag), [todoResult]);

  return (
    <>
      <TodoList result={incompleteTodos}  />
    </>
  )
})