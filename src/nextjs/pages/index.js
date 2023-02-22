import Head from "next/head";
import { useState } from "react";
import packageJson from "../package.json";

export default function Home(props) {
  const [newTodoToggle, setNewTodoToggle] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const newTodoSave = () => {
    setResult(input)
  }
  console.log(result)
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
          Todo Title: <input value={input} onChange={(event) => setInput(event.target.value)} />
          <button>x</button>
          <textarea rows={7} cols={30}></textarea>
          <button onClick={newTodoSave}>Save</button>
        </div>
          }
    </div>
  );
}
