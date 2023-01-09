// import userEvent from "@testing-library/user-event"
import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  /* useEffect callback function cannot be an async/await
    due that, async returns a promise so it will generate error
    
    If you want to use Async/Await in the useEffect you must create 
    an external function for it*/

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    // console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((eachUser) => {
          const { id, login, avatar_url, html_url } = eachUser

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
