import { useState } from "react"
import { data } from "../../../../data"
import List from "./List"
import Counter from "./Counter"
const LowerState = () => {
  const [people, setPeople] = useState(data)

  // Re-renders affect the child components, so if
  // the LowerState re-render, the "List" component
  // will also re-render making multiple re-renders
  // each time the counter its changed.

  // A possible solution its separating the counter
  // logic to a different component an import it here.

  // This solution not always can be implemented.

  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  )
}
export default LowerState
