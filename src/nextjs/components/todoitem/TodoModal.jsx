import { useContext, useState } from "react"
import TodoStyle from "../../styles/Todo.module.css"
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";
import { TodoResultContext } from "../../providers/TodoResultProvider";


export const TodoModal = (props) => {
  const { result, index, isEdit, setIsEdit, selectedTodo } = props
  const [todo, setTodo] = useState(result?.todo ||  "");
  const [todoDescription, setTodoDescription] = useState(result?.todoDescription || "")
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)

  const addTodo = () => {
    if (todo !== "") {
      setTodoResult([...todoResult, { todo, todoDescription, isCompleteFlag: false, isEdit: false }]);
      setTodo("")
      cancelTodo();
      setIsTodoModal(!isTodoModal)
    }
  };

  const updateTodo = () => {
    if (todo !== "") {
      const newTodo = [...todoResult]
      newTodo.splice(index, 1, { todo, todoDescription, isCompleteFlag: false })
      setTodo("")
      setTodoResult(newTodo)
      setIsEdit(false)
      setIsTodoModal(!isTodoModal)
    }
  }

  // const selectedTodo = () => {
  //   const edieSelect = todoResult.map((todo, todoIndex) => {
  //     if(todoIndex === index) {
  //       todo.isEdit === !todo.isEdit
  //     }
  //     return todo
  //   })
  //   setTodoResult(edieSelect)
  // }

  const closeModal = () => {
    setIsTodoModal(!isTodoModal)
    setIsEdit(false)
  }

  const cancelTodo = () => {
    setTodo("");
    setTodoDescription("");
  };
  
  console.log(selectedTodo)

  return (
    <div className={TodoStyle.overlay}>
      <div className={TodoStyle.modalContent}>
      <div className={TodoStyle.input} key={index}>
        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder={isEdit ? result.todo : "New todo"}
        />
        <button onClick={() => cancelTodo()}>x</button>
      </div>
      <div>
        <textarea
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
          placeholder={ isEdit ? result.todoDescription : "Description" }
          className={TodoStyle.input}
        />
      </div>
      <button onClick={ isEdit ? updateTodo : addTodo} 
        className={TodoStyle.saveButton}
      >
        { isEdit ? "Update" : "Save" }
      </button>

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}