import { useState, useCallback, useMemo } from "react"
import { data } from "../../../../data"
import List from "./List"
import SlowFunction from "./SlowFunction"
const LowerState = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  const value = useMemo(() => SlowFunction(), [])
  console.log(value)

  // useCallback uses a syntax similar to the usEffect
  // where it receives a function and a dependency
  // array, if the dependency array is empty
  // the function will only be generated once the
  // app loads, however,if the value in the dependency
  // array changes, the function will be generated.

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
    },
    [people]
  )

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}
export default LowerState
