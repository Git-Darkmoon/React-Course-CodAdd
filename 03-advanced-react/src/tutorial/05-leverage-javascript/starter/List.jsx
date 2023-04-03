import React from "react"
import { people } from "../../../data"
import { Person } from "./Person"

function List() {
  return (
    <section className="container">
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </section>
  )
}

export default List
