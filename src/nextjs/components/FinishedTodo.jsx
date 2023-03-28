import { memo, useContext, useMemo } from "react";
import { TodoResultContext } from "../providers/TodoResultProvider"
import TodoStyle from "../styles/Todo.module.css"
import { TodoList } from "./todoitem/TodoList";

export const FinishedTodo = memo(() => {
  const { todoResult } = useContext(TodoResultContext);
  const completeTodo = useMemo(() => todoResult
  .map((todo, index) => ({ ...todo, originalIndex: index }))
  .filter(todo => todo.isCompleteFlag), [todoResult]);
  
  return(
    <>
      <div className={TodoStyle.finishedTodoTitle}>
        Finished Todo
      </div>
      <TodoList result={completeTodo} />
    </>
  )
})