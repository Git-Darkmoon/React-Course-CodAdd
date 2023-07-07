import { memo } from "react"
import Item from "./Person"

// React.memo its a function that its going to have
// the syntax: React.memo(Component)
// And its going to check if the props of "Component"
// are changing, IF THEY'RE NOT, then it don't generate
// the re-render for that component

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />
      })}
    </div>
  )
}

// Here's an example of how it is used.

export default memo(List)
