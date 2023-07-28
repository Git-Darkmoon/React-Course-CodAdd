import { RouterProvider, createBrowserRouter } from "react-router-dom"

import {
  Landing,
  About,
  Cocktail,
  Error,
  Newsletter,
  HomeLayout,
} from "./Pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
      </div>
    ),
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
