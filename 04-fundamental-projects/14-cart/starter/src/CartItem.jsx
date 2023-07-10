<<<<<<< HEAD
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { useGlobalContext } from "./context"

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext()

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
=======
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => console.log('remove')}>
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
<<<<<<< HEAD
        <button className="amount-btn" onClick={() => increaseAmount(id)}>
          <FaChevronUp className="amount-icon" />
        </button>

        {/* amount */}
        <span className="amount">{amount}</span>

        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decreaseAmount(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  )
}

export default CartItem
=======
        <button className='amount-btn' onClick={() => console.log('increase')}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => console.log('decrease')}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
