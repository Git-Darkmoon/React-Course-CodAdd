import { useState, useContext, createContext } from "react"
import NavLinks from "./NavLinks"

export const NavbarContext = createContext()

/* createContext comes from React, and it avoids the
prop drilling problem where you have to do probably
more than 5 component props drilling.

THIS WILL BE THE PROVIDER COMPONENT.

- First: import createContext from React.
- Second: Create a variable to export like "NavbarContext"
and assign it to createContext().
- Third: Use the variable you created for
createContext as a component with the attribute
provider. Eg: contextComponent.Provider (like the
  one below called NavbarContext.Provider)

  what this means its this component its the one
  that is going to provide the info or props.

  you put an attribute called 'value={props}'

- Fourth: Doing the step third, makes the props
accessible to the whole tree of the component. That's
why you can use them in NavLinks with no need of putting
the props explicit.

The tutorial continues in UserContainer.jsx...
*/

// Custom hook

export const useAppContext = () => useContext(NavbarContext)

function Navbar() {
  const [user, setUser] = useState({ name: "Bob" })

  const logout = () => {
    setUser(null)
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar
