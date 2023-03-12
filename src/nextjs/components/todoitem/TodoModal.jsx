import { useContext, useState } from "react";
import TodoStyle from "../../styles/Todo.module.css";
import { TodoModalFlagContext } from "../../providers/TodoModalFlagProvider";
import { TodoResultContext } from "../../providers/TodoResultProvider";
import { SelectedTodoContext } from "../../providers/SelectedTodoProvider";

export const TodoModal = (props) => {
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  const { isTodoModal, setIsTodoModal } = useContext(TodoModalFlagContext);
  const { selectedTodo, setSelectedTodo } = useContext(SelectedTodoContext);
  const { index } = props;
  const [todo, setTodo] = useState(selectedTodo?.todo ?? "");
  const [todoDescription, setTodoDescription] = useState(selectedTodo?.todoDescription ?? "");


  const addTodo = () => {
    if (todo !== "") {
      setTodoResult([
        ...todoResult,
        { todo, todoDescription, isCompleteFlag: false, isEdit: false },
      ]);
      setTodo("");
      cancelTodo();
      setIsTodoModal(!isTodoModal);
    }
  };

  const updateTodo = () => {
    if (todo !== "") {
      const newTodo = [...todoResult];
      newTodo.splice(selectedTodo.id, 1, {
        todo,
        todoDescription,
        isCompleteFlag: false,
      });
      setTodo("");
      setTodoResult(newTodo);
      setIsTodoModal(!isTodoModal);
      setSelectedTodo(null)
    }
  };

  const closeModal = () => {
    setIsTodoModal(!isTodoModal);
    setSelectedTodo(null)
  };

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
            placeholder={selectedTodo?.todo ?? "New todo"}
          />
          <button onClick={() => cancelTodo()}>x</button>
        </div>
        <div>
          <textarea
            value={todoDescription}
            onChange={(event) => setTodoDescription(event.target.value)}
            placeholder={ selectedTodo?.todoDescription ?? "Description" }
            className={TodoStyle.input}
          />
        </div>
        <button
          onClick={ selectedTodo ? updateTodo : addTodo} 
          className={TodoStyle.saveButton}
        >
          { selectedTodo ? "Update" : "Save" }
        </button>

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
