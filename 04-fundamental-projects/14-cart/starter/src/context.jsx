import { createContext, useContext, useReducer, useEffect } from "react"
import reducer from "./reducer"
import cartItems from "./data"
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions"
import { getTotals } from "./utils"

const url = "https://www.course-api.com/react-useReducer-cart-project"

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map(),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { totalAmount, totalCost } = getTotals(state.cart)

  function clearCart() {
    dispatch({ type: CLEAR_CART })
  }

  function removeItem(id) {
    dispatch({ type: REMOVE, payload: { id } })
  }

  function increaseAmount(id) {
    dispatch({ type: INCREASE, payload: { id } })
  }

  function decreaseAmount(id) {
    dispatch({ type: DECREASE, payload: { id } })
  }

  async function fetchData() {
    dispatch({ type: LOADING })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
