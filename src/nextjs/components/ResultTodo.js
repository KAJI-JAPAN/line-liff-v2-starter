
export default function ResultTodo(props) {
  console.log(props.results) 
  return (
    <>
    {
      props.result.map((result, index) => (
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