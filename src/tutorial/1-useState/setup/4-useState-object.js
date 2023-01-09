import React, { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message",
  })

  const changeMessage = () => {
    setPerson({
      ...person,
      message: "New Message",
    })
  }

  const { name, age, message } = person

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
