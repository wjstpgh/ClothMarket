import Button from '../button/botton.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useCallback } from 'react';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ?
            (cartItems.map((item) => (
              <CartItem key={item.id} cartitem={item} />
            ))) : (
              <EmptyMessage>장바구니 비어있음</EmptyMessage>
            )
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>결제페이지 이동</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;