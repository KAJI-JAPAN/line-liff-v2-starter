import { useContext, useState } from "react"
import { TodoResultContext } from "../../providers/TodoResultProvider"
import { AddTodoOrUpdateTodo } from "./AddTodoOrUpdateTodo";

export const TodoEditButton = (props) => {
  const [todo, setTodo] = useState("");
  const { index, result } = props
  const [isEdit, setIsEdit] = useState(false);
  const { todoResult, setTodoResult } = useContext(TodoResultContext);  

console.log(isEdit)
  return (
    <>
    <button
      onClick={() => setIsEdit(!isEdit)}
    >
    Edit
  </button>
    {isEdit && <AddTodoOrUpdateTodo isEdit={isEdit} result={result} index={index} /> }
    </>
  )
}