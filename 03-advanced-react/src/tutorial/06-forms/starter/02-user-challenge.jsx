<<<<<<< HEAD
import { useState } from "react"
import { data } from "../../../data"

function UserChallenge() {
  const [name, setName] = useState("")
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return

    const updatedUsers = [
      ...users,
      { id: (Math.random() * users.length).toFixed(2), name: name },
    ]

    setUsers(updatedUsers)
    setName("")
  }

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4 style={{ display: "inline" }}> {user.name}</h4>
            <button
              style={{ marginLeft: "2rem" }}
              className="btn"
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
=======
const UserChallenge = () => {
  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
