import { useState } from "react"
import TodoStyle from "../../styles/Todo.module.css"

export const TodoModal = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className={TodoStyle.overlay}>
      <div className={TodoStyle.modalContent}>
        <button onClick={() => setIsModal(!isModal)}>Close</button>
      </div>
    </div>
  )
}