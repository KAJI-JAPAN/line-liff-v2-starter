import { useContext, useState } from "react"
import TodoStyle from "../../styles/Todo.module.css"
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";
import { TodoResultContext } from "../../providers/TodoResultProvider";
import { SelectedTodoContext } from "../../providers/SelectedTodo";


export const TodoModal = (props) => {
  const { result, index } = props
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("")
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext)
  const selectedTodo = todoResult.find((todo, todoIndex) => todoIndex ===  index )

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
          // placeholder={isEdit ? result.todo : "New todo"}
          placeholder={"New todo"}
        />
        <button onClick={() => cancelTodo()}>x</button>
      </div>
      <div>
        <textarea
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
          placeholder={ "Description" }
          // placeholder={ isEdit ? result.todoDescription : "Description" }
          className={TodoStyle.input}
        />
      </div>
      {/* <button onClick={ isEdit ? updateTodo : addTodo}  */}
      <button onClick={ addTodo } 
        className={TodoStyle.saveButton}
      >
        {/* { isEdit ? "Update" : "Save" } */}
      </button>

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}