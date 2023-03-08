import { useContext, useState } from "react";
import TodoStyle from "../styles/Todo.module.css";
import { TodoModalFlagContext } from "../providers/TodoModalFlagProvider";
import { AddTodoOrUpdateTodo } from "./todoitem/AddTodoOrUpdateTodo";


export const AddTodo = () => {
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)

  return (
    <>
      <button
        onClick={() => setIsTodoModal(!isTodoModal)}
        className={TodoStyle.title}
      >
        ＋ New Todo
      </button>
      {isTodoModal && <AddTodoOrUpdateTodo />}
    </>
  );
}
