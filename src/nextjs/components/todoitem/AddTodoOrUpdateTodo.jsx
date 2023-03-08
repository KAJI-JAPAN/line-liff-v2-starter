import { useContext, useState } from "react";
import TodoStyle from "../../styles/Todo.module.css";
import { TodoResultContext } from "../../providers/TodoResultProvider";


export const AddTodoOrUpdateTodo = (props) => {
  const { isEdit, setIsEdit, result, index } = props
  const [todo, setTodo] = useState(result?.todo || "");
  const [todoDescription, setTodoDescription] = useState(result?.todoDescription || "");
  const { todoResult, setTodoResult } = useContext(TodoResultContext);

  const addTodo = () => {
    if (todo !== "") {
      setTodoResult([...todoResult, { todo, todoDescription, isCompleteFlag: false }]);
      cancelTodo();
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
    <>
      <div className={TodoStyle.input} key={index}>
        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder={isEdit ? result.todo : "New Todo"}
        />
        <button onClick={() => cancelTodo()}>x</button>
      </div>
      <div>
        <textarea
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
          placeholder={isEdit ? result.todoDescription : "New Todo Description"}
          className={TodoStyle.input}
        />
      </div>
      <button onClick={ isEdit ? updateTodo : addTodo} 
        className={TodoStyle.saveButton}
      >
        {isEdit ? "Update" : "Save"}
      </button>
    </>
  );
}
