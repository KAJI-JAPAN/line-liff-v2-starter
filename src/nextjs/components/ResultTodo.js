import { useContext } from "react"

export default function ResultTodo() {
  const { todoResult } = useContext(TodoResultContext);
  return (
    <>
    {
      todoResult.map((result, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={result.todo}
            id={result.todo}
          />
          <label htmlFor={result.todo}>{result.todo}</label>
        </div>
      ))}
    </>
  )
}