import { Link, useRouteError } from "react-router-dom"
import ErrorDiv from "../assets/wrappers/ErrorPage"
import img from "../assets/not-found.svg"

function Error() {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <ErrorDiv>
        <div>
          <img src={img} alt="Error 404 image, not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to={"/"}>back home</Link>
        </div>
      </ErrorDiv>
    )
  }

  return (
    <ErrorDiv>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </ErrorDiv>
  )
}
export default Error
