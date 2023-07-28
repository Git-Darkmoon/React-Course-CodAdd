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
    element: <HomeLayout />, // This parent will have the shared layout so it MUST have the <Outlet/> component
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
