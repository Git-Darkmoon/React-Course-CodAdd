<<<<<<< HEAD
import { useState } from "react"
const frameworks = ["react", "angular", "vue", "svelte"]

function OtherInputs() {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState("react")

  const handleShipping = (e) => {
    console.log(e.target.checked)
    setShipping(e.target.checked)
  }

  const handleFramework = (e) => {
    setFramework(e.target.value)
  }

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((eachFramework) => {
              return (
                <option value="" key={eachFramework}>
                  {eachFramework}
                </option>
              )
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
=======
import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
        </div>
        <button type='submit' className='btn btn-block'>
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          submit
        </button>
      </form>
    </div>
<<<<<<< HEAD
  )
}
export default OtherInputs
=======
  );
};
export default OtherInputs;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
