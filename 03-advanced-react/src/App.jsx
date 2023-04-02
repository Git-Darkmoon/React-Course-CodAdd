import Navbar from "./tutorial/04-project-structure/starter/Navbar"
import {
  Home,
  About,
  Contact,
} from "./tutorial/04-project-structure/starter/Pages"

function App() {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App
