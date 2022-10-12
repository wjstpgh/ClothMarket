import './cart-item.styles.scss';
import { memo, FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartitem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartitem }) => {
  const { name, quantity, imageUrl, price } = cartitem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x {price}$
        </span>
      </div>
    </div>
  );
});

export default CartItem;