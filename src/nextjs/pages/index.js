import Head from "next/head";
import  ResultTodo  from "../components/ResultTodo"
import { useState } from "react";
import packageJson from "../package.json";
import NewTodo from "../components/NewTodo";
import TodoStyle from "../styles/Todo.module.css"
import FinishedTodo from "../components/FinishedTodo";

export default function Home(props) {
  const [newTodoToggle, setNewTodoToggle] = useState(false);


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
      <div className={TodoStyle.container}>
        <button onClick={() => setNewTodoToggle(!newTodoToggle)} className={TodoStyle.title}>＋ New Todo</button>
        {newTodoToggle && <NewTodo /> }
      </div>
      <ResultTodo />
      <div>Finished Todo</div>
      <FinishedTodo />
    </div>
  );
}
