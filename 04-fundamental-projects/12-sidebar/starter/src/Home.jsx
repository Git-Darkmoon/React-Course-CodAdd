import { useGlobalContext } from "./Context"
import { FaBars } from "react-icons/fa"

function Home() {
  const { openSidebar, openModal } = useGlobalContext()
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show modal
      </button>
    </main>
  )
}

export default Home
