import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

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
import { action as newsletterAction } from "./Pages/Newsletter"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

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
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
export default App
