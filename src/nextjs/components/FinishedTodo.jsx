import { useContext } from "react";
import { TodoResultContext } from "../providers/TodoResultProvider"
import TodoStyle from "../styles/Todo.module.css"
import { TodoList } from "./todoitem/TodoList";


export const FinishedTodo = () => {
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  return(
    <>
      <div className={TodoStyle.finishedTodoTitle}>
        Finished Todo
      </div>
      {
      todoResult.map((result, index) => (
        result.isCompleteFlag && <TodoList result={result} index={index} />
      ))}
    </>
  )
}