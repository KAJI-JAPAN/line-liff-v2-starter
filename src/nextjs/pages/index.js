import Head from "next/head";
import  ResultTodo  from "../components/ResultTodo"
import { useState } from "react";
import packageJson from "../package.json";
import NewTodo from "../components/NewTodo";

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
        <button onClick={() => setNewTodoToggle(!newTodoToggle)}>＋ New Todo</button>
        {newTodoToggle && <NewTodo /> }
    </div>
  );
}
