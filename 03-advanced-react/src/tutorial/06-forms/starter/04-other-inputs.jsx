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
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
