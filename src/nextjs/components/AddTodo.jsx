import { memo, useContext, useState } from "react";
import TodoStyle from "../styles/Todo.module.css";
import { TodoModalFlagContext } from "../providers/TodoModalFlagProvider";
import { TodoModal } from "./todoitem/TodoModal";


export const AddTodo = memo(() => {
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)

  return (
    <>
      <button
        onClick={() => setIsTodoModal(!isTodoModal)}
        className={TodoStyle.title}
      >
        ＋ New Todo
      </button>
      {isTodoModal && <TodoModal />}
    </> 
  );
})
