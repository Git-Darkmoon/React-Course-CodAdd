import React from "react"

const ErrorExample = () => {
  let title = "A random title"

  const handleClick = () => {
    title = "Other Title"
  }

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  )
}

export default ErrorExample
