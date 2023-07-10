<<<<<<< HEAD
import { FaCartPlus } from "react-icons/fa"
import { useGlobalContext } from "./context"
const Navbar = () => {
  const { totalAmount } = useGlobalContext()

  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
=======
import { FaCartPlus } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>2</p>
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
          </div>
        </div>
      </div>
    </nav>
<<<<<<< HEAD
  )
}

export default Navbar
=======
  );
};

export default Navbar;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2
