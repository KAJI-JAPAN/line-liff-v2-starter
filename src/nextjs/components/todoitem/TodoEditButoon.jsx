import { useContext, useState } from "react"
import { AddTodoOrUpdateTodo } from "./AddTodoOrUpdateTodo";
import TodoStyle from "../../styles/Todo.module.css"
import { TodoModal } from "./TodoModal";
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";




export const TodoEditButton = (props) => {
  const { index, result } = props
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)


  return (
    <>
    <button
      onClick={() => setIsTodoModal(!isTodoModal)}
      className={TodoStyle.editButton}
    >
    Edit
  </button>
    {isTodoModal && <TodoModal result={result} index={index} buttonAction={"updateTodo"} buttonTitle={"Update"} todoTitle={result.todo} todoDetails={result.todoDescription } /> }
    </>
  )
}