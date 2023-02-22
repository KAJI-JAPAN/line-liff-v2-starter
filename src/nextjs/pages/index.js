import Head from "next/head";
import { useState } from "react";
import packageJson from "../package.json";

export default function Home(props) {
  const [newTodoToggle, setNewTodoToggle] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("")
  const [todoResult, seTodoResult] = useState([]);

  const cancelTodo = () => {
    setTodo("")
    setTodoDescription("")
  }

  const newTodoSave = () => {
    if(todo !== "") {
      seTodoResult(todoResult => [...todoResult, {todo, todoDescription}])
      cancelTodo()
    }
  }
  console.log(todoResult)
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <div>
      <Head>
        <title>Todo Sample</title>
      </Head>
        <button onClick={() => setNewTodoToggle(!newTodoToggle)}>＋ New Todo</button>
        {newTodoToggle &&
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
        }
          {
          todoResult.map((result) => (
            <div>
              <input
                type="checkbox"
                value={result.todo}
                id={result.todo}
              />
              <label for={result.todo}>{result.todo}</label>
            </div>
          ))}
    </div>
  );
}
