import React, { useState, useEffect } from "react"
import ClockLoader from "react-spinners/ClockLoader"

const url = "https://api.github.com/users/QuincyLarson"

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("default user")

  const getUser = async () => {
    const resp = await fetch(url)

    if (resp.status >= 200 && resp.status < 300) {
      const user = await resp.json()

      const { login } = user

      setUser(login)

      setTimeout(() => {
        setIsLoading((prevState) => {
          return (prevState = false)
        })
      }, 1500)
      console.log(user)
    } else {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
        <ClockLoader color="#36d7b7" />
      </>
    )
  }

  if (isError) {
    return (
      <>
        <h1>Something went wrong...</h1>
      </>
    )
  }

  return (
    <>
      <h1>{user}</h1>
    </>
  )
}

export default MultipleReturns
