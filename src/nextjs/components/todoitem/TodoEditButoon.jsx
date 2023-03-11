import { useContext, useState } from "react"
import TodoStyle from "../../styles/Todo.module.css"
import { TodoModal } from "./TodoModal";
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";




export const TodoEditButton = (props) => {
  const { index, result } = props
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)
  const [isEdit, setIsEdit ] = useState(false)
  const [selectedTodo, setSelectedTodo] =useState(null)
  const editHandle = () => {
    setIsTodoModal(!isTodoModal)
    setIsEdit(isEdit)
    setSelectedTodo(result)
  }
  return (
    <>
    <button
      onClick={editHandle}
      className={TodoStyle.editButton}
    >
    Edit
  </button>
    {isTodoModal && <TodoModal result={result} index={index} isEdit={isEdit} setIsEdit={setIsEdit} selectedTodo={selectedTodo} /> }
    </>
  )
}