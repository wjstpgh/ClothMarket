import Button from '../button/botton.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>결제하기</Button>
    </div>
  );
}

export default CartDropdown;