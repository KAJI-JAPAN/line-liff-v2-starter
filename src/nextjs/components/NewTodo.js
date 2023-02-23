import { useState } from "react";

export default function NewTodo() {

  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("")

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
    <div>
      Todo Title: <input value={todo} onChange={(event) => setTodo(event.target.value)} placeholder="New Todo" />
      <button onClick={() => cancelTodo()}>x</button>
      <textarea
        rows={7}
        cols={30} 
        value={todoDescription}
        onChange={(event) => setTodoDescription(event.target.value) }
        placeholder="New Todo Description"
      />
      <button onClick={newTodoSave}>Save</button>
  </div>
  )
}