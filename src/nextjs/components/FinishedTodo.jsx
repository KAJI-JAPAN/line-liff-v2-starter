import { useContext } from "react";
import { TodoResultContext } from "../providers/TodoResultProvider"
import TodoStyle from "../styles/Todo.module.css"
import { TodoList } from "./todoitem/TodoList";

export const FinishedTodo = () => {
  const { todoResult,  } = useContext(TodoResultContext);
  const completeTodo = todoResult.filter(todo => todo.isCompleteFlag)
  return(
    <>
      <div className={TodoStyle.finishedTodoTitle}>
        Finished Todo
      </div>
      <TodoList result={completeTodo} />
    </>
  )
}