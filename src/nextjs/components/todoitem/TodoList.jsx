import { TodoDeleteButton } from "./TodoDeleteButton"
import { TodoResultContext } from "../../providers/TodoResultProvider"
import { useContext } from "react";
import { TodoEditButton } from "./TodoEditButoon";
import TodoStyle from "../../styles/Todo.module.css"

export const TodoList = ( props ) => {
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  const { result, index } = props

  const iscompleteCheked = (index) => {
    const checkedTodo = todoResult.map((todo, todoIndex) => {
      if (index === todoIndex) {
        todo.isCompleteFlag = !todo.isCompleteFlag
      }
      return todo
    })
    setTodoResult(checkedTodo)
  }

  return (
        <div key={index} className={TodoStyle.list}>
          <div className={TodoStyle.result}>
            <input
              type="checkbox"
              value={result.todo}
              id={result.todo}
              checked={result.isCompleteFlag}
              onChange={() => iscompleteCheked(index)}
              className={TodoStyle.resultInput}
              />
          </div>
          <div className={TodoStyle.resultLabel}>
            <label htmlFor={result.todo} className={TodoStyle.lebel}>{result.todo}</label>
          </div>
            <TodoEditButton index={index} result={result} />
            <TodoDeleteButton index={index} />
        </div>
  )
}