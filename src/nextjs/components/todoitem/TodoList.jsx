  import { TodoDeleteButton } from "./TodoDeleteButton"
  import { TodoResultContext } from "../../providers/TodoResultProvider"
  import { useContext, useState } from "react";
  import { TodoEditButton } from "./TodoEditButoon";
  import { SelectedTodoContext } from "../../providers/SelectedTodo";
  import TodoStyle from "../../styles/Todo.module.css"

  export const TodoList = ( props ) => {
    const { todoResult, setTodoResult } = useContext(TodoResultContext);
    const { selectedTodo, setSelectedTodo } = useContext(SelectedTodoContext);
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

    const todoHandleClick = (todo) => {
      setSelectedTodo(todo)
    }

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
                  <TodoEditButton getTodoIndex={() => todoHandleClick(todo)} />
                  <TodoDeleteButton index={index} />
              </div>
            ))
          }
        </>
    )
  }