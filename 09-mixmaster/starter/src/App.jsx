import { RouterProvider, createBrowserRouter } from "react-router-dom"

import {
  Landing,
  About,
  Cocktail,
  Error,
  Newsletter,
  HomeLayout,
  SinglePageError,
} from "./Pages"

import { loader as landingLoader } from "./Pages/Landing"
import { loader as singleCocktailLoader } from "./Pages/Cocktail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // This parent will have the shared layout so it MUST have the <Outlet/> component
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
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
