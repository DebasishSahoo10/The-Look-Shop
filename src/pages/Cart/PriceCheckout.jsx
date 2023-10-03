import { useState } from "react";
import "./Cart.css";
import { Address } from "../../components/Address";
import { handleCheckout } from "../../utils/clickHandlers";
import { useSelector } from "react-redux";

export const PriceCheckout = () => {
  const [discount, setDiscount] = useState(0);
  const data = useSelector(state => state.data)
  const totalAmt = data.cart.reduce((acc, item) => (acc += item.price * item.qty), 0) - discount

  return (
    <div className="price-container">
      <>
        {data.cart.length > 0 && (
          <button onClick={() => setDiscount(55)}>Apply a Coupon</button>
        )}
        <p>Total items in Cart : {data.cart.length}</p>
        <p>Total Discount : ${discount}</p>
        <p>Delivery Charges : FREE</p>
      </>

      <p>
        Total Amount : ${totalAmt}
        
      </p>
      <div className="address-container">
        <Address />
      </div>
      <button onClick={() => handleCheckout(totalAmt, data.cart)}>Checkout</button>
    </div>
  );
};
