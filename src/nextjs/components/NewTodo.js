import { useState } from "react";
import ResultTodo from "./ResultTodo";
import TodoStyle from "../styles/Todo.module.css"

export default function NewTodo() {

  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("")
  const [todoResult, seTodoResult] = useState([]);


  const newTodoSave = () => {
    if(todo !== "") {
      seTodoResult(todoResult => [...todoResult, {todo, todoDescription}])
      cancelTodo()
    }
  }

  const cancelTodo = () => {
    setTodo("")
    setTodoDescription("")
  }

  return(
    <>
      <div className={TodoStyle.input}>
        <input value={todo} onChange={(event) => setTodo(event.target.value)} placeholder="New Todo Title" />
        <button onClick={() => cancelTodo()}>x</button>
      </div>
      <div>
        <textarea
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value) }
          placeholder="New Todo Description"
          className={TodoStyle.input}
        />
      </div>
      <button onClick={newTodoSave} className={TodoStyle.button}>Save</button>
      <ResultTodo result={todoResult} />
  </>
  )
}