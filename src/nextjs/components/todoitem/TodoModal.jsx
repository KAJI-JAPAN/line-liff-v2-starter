import { useContext, useState } from "react"
import TodoStyle from "../../styles/Todo.module.css"
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";

export const TodoModal = () => {
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)
  return (
    <div className={TodoStyle.overlay}>
      <div className={TodoStyle.modalContent}>
        <button onClick={() => setIsTodoModal(!isTodoModal)}>Close</button>
      </div>
    </div>
  )
}