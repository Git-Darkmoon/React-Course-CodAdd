<<<<<<< HEAD
import { useEffect, useRef, useState } from "react"

const UseRefBasics = () => {
  const [value, setValue] = useState(0)

  const refContainer = useRef(null)
  const isMounted = useRef(false)
  // console.log(refContainer)

  useEffect(() => {
    refContainer.current.focus()
  })

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    console.log("re-render")
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = refContainer.current.value
    console.log(name)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
=======
import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' id='name' className='form-input' />
        </div>
        <button type='submit' className='btn btn-block'>
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
<<<<<<< HEAD
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
=======
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
