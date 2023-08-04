import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./Cart.css";
import { Address } from "../../components/Address";
import { handleCheckout } from "../../utils/clickHandlers";

export const PriceCheckout = () => {
  const [discount, setDiscount] = useState(0);
  const { state } = useContext(DataContext);
  const totalAmt = state.cart.reduce((acc, item) => (acc += item.price * item.qty), 0) - discount

  return (
    <div className="price-container">
      <>
        {state.cart.length > 0 && (
          <button onClick={() => setDiscount(55)}>Apply a Coupon</button>
        )}
        <p>Total items in Cart : {state.cart.length}</p>
        <p>Total Discount : ${discount}</p>
        <p>Delivery Charges : FREE</p>
      </>

      <p>
        Total Amount : ${totalAmt}
        
      </p>
      <div className="address-container">
        <Address />
      </div>
      <button onClick={() => handleCheckout(totalAmt, state.cart)}>Checkout</button>
    </div>
  );
};
