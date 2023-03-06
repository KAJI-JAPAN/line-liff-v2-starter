import { useState } from "react"
import { AddTodoOrUpdateTodo } from "./AddTodoOrUpdateTodo";
import TodoStyle from "../../styles/Todo.module.css"

export const TodoEditButton = (props) => {
  const { index, result } = props
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
    <button
      onClick={() => setIsEdit(!isEdit)}
      className={TodoStyle.editButton}
    >
    Edit
  </button>
    {isEdit && <AddTodoOrUpdateTodo isEdit={isEdit} setIsEdit={setIsEdit} result={result} index={index} /> }
    </>
  )
}