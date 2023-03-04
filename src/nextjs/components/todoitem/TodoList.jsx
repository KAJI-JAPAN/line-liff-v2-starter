import { TodoDeleteButton } from "./TodoDeleteButton"
import { TodoResultContext } from "../../providers/TodoResultProvider"
import { useContext } from "react";

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
        <div key={index}>
          <input
            type="checkbox"
            value={result.todo}
            id={result.todo}
            checked={result.isCompleteFlag}
            onChange={() => iscompleteCheked(index)}
          />
          <label htmlFor={result.todo}>{result.todo}</label>
          <TodoDeleteButton index={index} />
        </div>
  )
}