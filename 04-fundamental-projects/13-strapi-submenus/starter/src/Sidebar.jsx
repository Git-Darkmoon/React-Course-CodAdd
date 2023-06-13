import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"
import sublinks from "./data"

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={`sidebar ${isSidebarOpen && " show-sidebar"}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { pageId, page, links } = item
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, url, icon, label } = link
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
