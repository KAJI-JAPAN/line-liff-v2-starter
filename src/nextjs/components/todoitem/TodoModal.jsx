import { useContext, useState } from "react"
import TodoStyle from "../../styles/Todo.module.css"
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";
import { TodoResultContext } from "../../providers/TodoResultProvider";


export const TodoModal = (props) => {
  const { result, index, buttonAction, buttonTitle, todoTitle, todoDetails } = props
  const [todo, setTodo] = useState(result?.todo || "");
  const [todoDescription, setTodoDescription] = useState(result?.todoDescription || "");
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)

  const addTodo = () => {
    if (todo !== "") {
      setTodoResult([...todoResult, { todo, todoDescription, isCompleteFlag: false }]);
      cancelTodo();
      setIsTodoModal(!isTodoModal)
    }
  };

  const updateTodo = () => {
    if (todo !== "") {
      const newTodo = [...todoResult]
      console.log(newTodo)
      newTodo.splice(index, 1, { todo, todoDescription, isCompleteFlag: false })
      setTodoResult(newTodo)
      setIsEdit(false)
    }
  }

  const cancelTodo = () => {
    setTodo("");
    setTodoDescription("");
  };

  return (
    <div className={TodoStyle.overlay}>
      <div className={TodoStyle.modalContent}>
      <div className={TodoStyle.input} key={index}>

        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder={todoTitle}
        />
        <button onClick={() => cancelTodo()}>x</button>
      </div>
      <div>
        <textarea
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
          placeholder={ todoDetails }
          className={TodoStyle.input}
        />
      </div>
      <button onClick={ buttonAction === "addTodo" ? addTodo : updateTodo  } 
        className={TodoStyle.saveButton}
      >
        { buttonTitle }
      </button>

        <button onClick={() => setIsTodoModal(!isTodoModal)}>Close</button>
      </div>
    </div>
  )
}