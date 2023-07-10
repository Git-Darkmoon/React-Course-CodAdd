<<<<<<< HEAD
import { useState } from "react"

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something
    console.log(name, email)
    setName("")
    setEmail("")
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="example"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  )
}
export default ControlledInputs
=======
const ControlledInputs = () => {
  return <h2>Controlled Inputs</h2>;
};
export default ControlledInputs;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
