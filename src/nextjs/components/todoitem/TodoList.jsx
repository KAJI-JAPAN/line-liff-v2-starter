  import { TodoDeleteButton } from "./TodoDeleteButton"
  import { TodoResultContext } from "../../providers/TodoResultProvider"
  import { useContext } from "react";
  import { TodoEditButton } from "./TodoEditButoon";
  import TodoStyle from "../../styles/Todo.module.css"

  export const TodoList = ( props ) => {
    const { todoResult, setTodoResult } = useContext(TodoResultContext);
    const { result } = props

    const iscompleteCheked = (index) => {
      const checkedTodo = todoResult.map((todo, todoIndex) => {
        if (index === todoIndex) {
          todo.isCompleteFlag = !todo.isCompleteFlag
        }
        return todo
      })
      setTodoResult(checkedTodo)
    }
    console.log(result)
    return (
        <>
          {result.map((todo, index) => (
              <div key={index} className={TodoStyle.list}>
                <div className={TodoStyle.result}>
                  <input
                    type="checkbox"
                    value={todo.todo}
                    id={todo.todo}
                    checked={todo.isCompleteFlag}
                    onChange={() => iscompleteCheked(index)}
                    className={todo.resultInput}
                    />
                </div>
                <div className={TodoStyle.resultLabel}>
                  <label htmlFor={todo.todo} className={TodoStyle.lebel}>{todo.todo}</label>
                </div>
                  <TodoEditButton index={index} />
                  <TodoDeleteButton index={index} />
              </div>
            ))
          }
        </>
    )
  }