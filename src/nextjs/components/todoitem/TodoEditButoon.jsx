import { useState } from "react"
import { AddTodoOrUpdateTodo } from "./AddTodoOrUpdateTodo";

export const TodoEditButton = (props) => {
  const { index, result } = props
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
    <button
      onClick={() => setIsEdit(!isEdit)}
    >
    Edit
  </button>
    {isEdit && <AddTodoOrUpdateTodo isEdit={isEdit} setIsEdit={setIsEdit} result={result} index={index} /> }
    </>
  )
}