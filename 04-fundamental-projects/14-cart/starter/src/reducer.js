import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions"

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart)
    const productID = action.payload.id
    newCart.delete(productID)

    return { ...state, cart: newCart }
  }

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart)
    const productID = action.payload.id
    const product = newCart.get(productID)

    const newProduct = { ...product, amount: product.amount + 1 }
    newCart.set(productID, newProduct)

    return { ...state, cart: newCart }
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart)
    const productID = action.payload.id
    const product = newCart.get(productID)

    const newProduct = { ...product, amount: product.amount - 1 }

    newProduct.amount > 0
      ? newCart.set(productID, newProduct)
      : newCart.delete(productID)

    return { ...state, cart: newCart }
  }

  if (action.type === LOADING) {
    return { ...state, loading: true }
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]))

    return { ...state, loading: false, cart: newCart }
  }

  throw new Error(`No matching action type: ${action.type}`)
}

export default reducer
