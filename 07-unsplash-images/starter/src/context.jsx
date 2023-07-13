import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()

function getInitialDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-schema:dark)"
  ).matches

  const storedDarkMode = localStorage.getItem("darkTheme") === "true"

  return storedDarkMode || prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState("Cat")

  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)

    const $body = document.querySelector("body")
    $body.classList.toggle("dark-theme", newDarkTheme)

    localStorage.setItem("darkTheme", newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme)
  }, [])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
