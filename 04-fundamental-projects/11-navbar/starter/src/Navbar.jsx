import { useState, useRef } from "react"
import { links, social } from "./data"
import { FaBars } from "react-icons/fa"
import logo from "./logo.svg"

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  /* useRef is a hook that is going to point to a DOM_node,
  the value that you put in useRef is going to be the initial value.
  To make it point to somewhere, add the attribute called rel={} in a DOM_node 
  then, add to the attribute the name of the variable where you are "saving".
  useRef is going to return an OBJECT with a property called .current,
  now the variable have the value of the node element */

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  /* VanillaJS includes a function called: .getBoundingClientRect(),
  it is going to get the dimensions of the element as an OBJECT,
  with the properties: {
    bottom:,
    height:,
    left:,
    right:,
    top:,
    width:,
    x:,
    y:
  }
*/

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  /* You can create an object of styles to use it later
  through inline styling */

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef} // Here is the variable of the useRef.
          style={linkStyles} // implementing the object of styles.
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Social links */}

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon

            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
