import Head from "next/head";
import { ResultTodo }  from "../components/ResultTodo";
import { AddTodo }  from "../components/AddTodo";
  import TodoStyle from "../styles/Todo.module.css";
import  { FinishedTodo }  from "../components/FinishedTodo";
import { TodoResultProvider }  from "../providers/TodoResultProvider";
import { TodoModalFlagProvider } from "../providers/TodoModalFlagProvider";
import { SelectedTodoProvider } from "../providers/SelectedTodo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo Sample</title>
      </Head>
      <TodoResultProvider>
        <SelectedTodoProvider>
          <TodoModalFlagProvider>
            <div className={TodoStyle.container}>
              <AddTodo />
              <ResultTodo />
              <div className={TodoStyle.finishedTodo}>
                <FinishedTodo />
              </div>
            </div>
          </TodoModalFlagProvider>
        </SelectedTodoProvider>
      </TodoResultProvider>
    </>
  );
}
