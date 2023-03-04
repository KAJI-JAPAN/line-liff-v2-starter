import Head from "next/head";
import { ResultTodo }  from "../components/ResultTodo";
import { useState } from "react";
import { NewTodo }  from "../components/NewTodo";
  import TodoStyle from "../styles/Todo.module.css";
import  { FinishedTodo }  from "../components/FinishedTodo";
import { TodoResultProvider }  from "../providers/TodoResultProvider";

export default function Home(props) {
  const [newTodoToggle, setNewTodoToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Todo Sample</title>
      </Head>
      <TodoResultProvider>
          <div className={TodoStyle.container}>
            <button
              onClick={() => setNewTodoToggle(!newTodoToggle)}
              className={TodoStyle.title}
            >
              ＋ New Todo
            </button>
            {newTodoToggle && <NewTodo />}
            <ResultTodo />
            <div className={TodoStyle.finishedTodo}>
              <FinishedTodo />
            </div>
          </div>
      </TodoResultProvider>
    </>
  );
}
