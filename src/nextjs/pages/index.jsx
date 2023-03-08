import Head from "next/head";
import { ResultTodo }  from "../components/ResultTodo";
import { useState } from "react";
import { AddTodo, NewTodo }  from "../components/AddTodo";
  import TodoStyle from "../styles/Todo.module.css";
import  { FinishedTodo }  from "../components/FinishedTodo";
import { TodoResultProvider }  from "../providers/TodoResultProvider";
import { AddTodoOrUpdateTodo } from "../components/todoitem/AddTodoOrUpdateTodo";
import { TodoModalFlagProvider } from "../providers/TodoModalFlagProvider";

export default function Home(props) {
  const [newTodoToggle, setNewTodoToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Todo Sample</title>
      </Head>
      <TodoResultProvider>
        <TodoModalFlagProvider>
          <div className={TodoStyle.container}>
            <AddTodo />
            <ResultTodo />
            <div className={TodoStyle.finishedTodo}>
              <FinishedTodo />
            </div>
          </div>
        </TodoModalFlagProvider>
      </TodoResultProvider>
    </>
  );
}
