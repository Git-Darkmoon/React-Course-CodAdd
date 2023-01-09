import React, { useState } from "react"

const UseStateCounter = () => {
  let [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexIncrese = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrese}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
