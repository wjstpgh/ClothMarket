import { useContext } from "react";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context"
import './checkout.styles.scss';

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>상품</span>
        </div>
        <div className="header-block">
          <span>설명</span>
        </div>
        <div className="header-block">
          <span>양</span>
        </div>
        <div className="header-block">
          <span>가격</span>
        </div>
        <div className="header-block">
          <span>취소</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
}

export default CheckOut;