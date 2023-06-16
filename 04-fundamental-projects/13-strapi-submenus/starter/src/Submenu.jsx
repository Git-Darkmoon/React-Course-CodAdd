import { useRef } from "react"
import { useGlobalContext } from "./Context"
import sublinks from "./data"

function Submenu() {
  const { pageId, setPageId } = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const submenuContainer = useRef(null)

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current
    const { left, right, bottom } = submenu.getBoundingClientRect()
    const { clientX, clientY } = event

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }

  return (
    <div
      className={`submenu ${currentPage && "show-submenu"}`}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
