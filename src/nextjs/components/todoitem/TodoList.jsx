import { TodoDeleteButton } from "./TodoDeleteButton"

export const TodoList = ( props ) => {
  const { result, index } = props
  return (
        <div key={index}>
          <input
            type="checkbox"
            value={result.todo}
            id={result.todo}
            checked={result.isCompleteFlag}
            onChange={() => iscompleteCheked(index)}
          />
          <label htmlFor={result.todo}>{result.todo}</label>
          <TodoDeleteButton index={index} />
        </div>
  )
}