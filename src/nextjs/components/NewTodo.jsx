import { useContext, useState } from "react";
import TodoStyle from "../styles/Todo.module.css";
import { TodoResultContext } from "../providers/TodoResultProvider";
import { CompleteFlagContext } from "../providers/CompleteFlagProvider";

export default function NewTodo() {
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const { todoResult, seTodoResult } = useContext(TodoResultContext);
  const { isCompleteFlag } = useContext(CompleteFlagContext);

  const newTodoSave = () => {
    if (todo !== "") {
      seTodoResult((todoResult) => [
        ...todoResult,
        { todo, todoDescription, isCompleteFlag, isCompleteFlag },
      ]);
      cancelTodo();
    }
  };

  const cancelTodo = () => {
    setTodo("");
    setTodoDescription("");
  };

  return (
    <>
      <div className={TodoStyle.input}>
        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="New Todo Title"
        />
        <button onClick={() => cancelTodo()}>x</button>
      </div>
      <div>
        <textarea
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
          placeholder="New Todo Description"
          className={TodoStyle.input}
        />
      </div>
      <button onClick={newTodoSave} className={TodoStyle.button}>
        Save
      </button>
    </>
  );
}
