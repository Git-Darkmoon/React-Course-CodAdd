import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import customFetch from "./utils"

const Form = () => {
  const [newItemName, setNewItemName] = useState("")

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) =>
      customFetch.post("/", {
        title: taskTitle,
      }),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(newItemName)
    setNewItemName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
          required
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  )
}
export default Form
