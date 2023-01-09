/* The importation of the "useState" MUST be in 
  curly braces { } due to being a function. */

import React, { useState } from "react"

// useState - function

const UseStateBasics = () => {
  /*
    useState("hello world")
    const value = useState(1)[0]
    const handler = useState(1)[1]

    Array destructuring for good practices using it:

    const [value, setValue] = useState(value passed)
      ~ setValue works like a setter.
    */

  const [text, setText] = useState({
    name: "John",
    lastName: "Doe",
    age: 27,
    position: "UI Designer",
  })

  const updateJob = () => {
    if (text.position === "UI Designer") {
      setText({
        ...text,
        position: "Product Manager",
      })
    } else {
      setText({
        ...text,
        position: "UI Designer",
      })
    }
  }

  return (
    <>
      <h2>
        Hi ! I'm {text.name} {text.lastName}
      </h2>
      <h3>I'm {text.age}</h3>
      <h5>Working as {text.position}</h5>
      <button className="btn" onClick={updateJob}>
        Change Title
      </button>
    </>
  )
}

export default UseStateBasics
