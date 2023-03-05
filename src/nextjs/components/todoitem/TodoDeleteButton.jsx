
import { useContext } from "react"
import { TodoResultContext } from "../../providers/TodoResultProvider"
import TodoStyle from "../../styles/Todo.module.css";


export const TodoDeleteButton = (props) => {
  const { index } = props
  const { todoResult, setTodoResult } = useContext(TodoResultContext);  

  const deleteTodo = (index) => {
    const result = [...todoResult]
    result.splice(index, 1)
    setTodoResult(result)
  }

  return(
      <button
        onClick={() => deleteTodo(index)}
        className={TodoStyle.deleteButton}
      >
        TodoDelte
      </button>
  )
}