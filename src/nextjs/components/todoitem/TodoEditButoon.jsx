import { memo, useContext, useState } from "react"
import TodoStyle from "../../styles/Todo.module.css"
import { TodoModal } from "./TodoModal";
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";

export const TodoEditButton = memo((props) => {
  const { getTodoIndex } = props
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)

  return (
    <>
    <button
      onClick={() => {
        setIsTodoModal(!isTodoModal)
        getTodoIndex()
      }}
      className={TodoStyle.editButton}
    >
    Edit
  </button>
    {isTodoModal && <TodoModal /> }
    </>
  )
})