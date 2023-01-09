import React, { useState } from "react"
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [isError, setIsError] = useState(false)

  /* ~ short-circuit evaluation
    let variable1 = falsyValue || valorDeRetorno
    let variable2 = truthyValue && valorDeRetorno 

  const firstValue = text || "hello world"
  const secondValue = text && "hello world"
  */

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>Value: {secondValue}</h2> */}

      {/* if in this case the first value {text} is falsy
        we'll return the value after the || 
      */}

      <h1>{text || "John Doe"}</h1>

      {/* In this other case, if the first value
        is truthy, we'll display the second one,
        the value that's after the &&, BUT the power
        of this && operator is that, you can also
        show a full component, this helps triggering
        a component
      */}

      {/* {text && <h1>Hello world {text}</h1>} */}
      {/* This can also be done: */}
      {/* {!text && <h1>Hello world {text}</h1>} */}

      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}

      {/* Evaluating with the ternary operator */}

      {isError ? (
        <p>Something went wrong...</p>
      ) : (
        <div>
          <h2>Everything is ok 👀</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
