<<<<<<< HEAD
import CartItem from "./CartItem"
import { useGlobalContext } from "./context"

const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext()

  const cartArray = Array.from(cart.entries())

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
=======
import CartItem from './CartItem';
import cartItems from './data';
const CartContainer = () => {
  const cartArray = [...cartItems];

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
<<<<<<< HEAD
          const [id, item] = cartItem

          return <CartItem key={id} {...item} />
=======
          return <CartItem key={cartItem.id} {...cartItem} />;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
<<<<<<< HEAD
          <h5 className="cart-total">
            total <span>$ {totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
=======
          <h5 className='cart-total'>
            total <span>$10</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() => console.log('clear cart')}
        >
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          clear cart
        </button>
      </footer>
    </section>
<<<<<<< HEAD
  )
}

export default CartContainer
=======
  );
};

export default CartContainer;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
