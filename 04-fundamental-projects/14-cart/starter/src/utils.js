export function getTotals(cart) {
  let totalAmount = 0
  let totalCost = 0

  // Here you can use item.amount item.price
  // OR destructure it like an object in the loop.

  for (let { amount, price } of cart.values()) {
    totalAmount += amount
    totalCost += amount * price
  }

  return { totalAmount, totalCost }
}
