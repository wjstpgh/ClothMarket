import { useSelector } from "react-redux";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import './checkout.styles.scss';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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