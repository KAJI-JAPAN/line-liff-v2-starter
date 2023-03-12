import { TodoDeleteButton } from "./TodoDeleteButton";
import { TodoResultContext } from "../../providers/TodoResultProvider";
import { useContext } from "react";
import { TodoEditButton } from "./TodoEditButoon";
import { SelectedTodoContext } from "../../providers/SelectedTodoProvider";
import TodoStyle from "../../styles/Todo.module.css";

export const TodoList = (props) => {
  const { todoResult, setTodoResult } = useContext(TodoResultContext);
  const { seletedTodo, setSelectedTodo  } = useContext(SelectedTodoContext);
  const { result } = props;

  const iscompleteCheked = (index) => {
    const checkedTodo = todoResult.map((todo, todoIndex) => {
      if (index === todoIndex) {
        todo.isCompleteFlag = !todo.isCompleteFlag;
      }
      return todo;
    });
    setTodoResult(checkedTodo);
  };

  const todoHandleClick = (index, todo) => {
    setSelectedTodo({id: index, ...todo, isEdit: true});
  };
  return (
    <>
      {result.map((todo, index) => (
        <div key={index} className={TodoStyle.list}>
          <div className={TodoStyle.result}>
            <input
              type="checkbox"
              value={todo.todo}
              id={todo.todo}
              checked={todo.isCompleteFlag}
              onChange={() => iscompleteCheked(index)}
              className={todo.resultInput}
            />
          </div>
          <div className={TodoStyle.resultLabel}>
            <label htmlFor={todo.todo} className={TodoStyle.lebel}>
              {todo.todo}
            </label>
          </div>
          <TodoEditButton getTodoIndex={() => todoHandleClick(index, todo)} />
          <TodoDeleteButton index={index} />
        </div>
      ))}
    </>
  );
};
