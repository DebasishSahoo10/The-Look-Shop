import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./Cart.css";
import { Address } from "../../components/Address";

export const PriceCheckout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [discount, setDiscount] = useState(0);
  const { state } = useContext(DataContext);

  useEffect(()=>{
    if (isVisible) {
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 5000);
  
        return () => {
          clearTimeout(timeout);
        };
      }
  },[isVisible])
  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="price-container">
      {!isVisible ? (
        <>
          {state.cart.length > 0 && (
            <button onClick={() => setDiscount(55)}>Apply a Coupon</button>
          )}
          <p>Total items in Cart : {state.cart.length}</p>
          <p>Total Discount : ${discount}</p>
          <p>Delivery Charges : FREE</p>
        </>
      ) : <><p>We are not actually a meta shop. Right? Getting you back to the normal UI in a moment.</p></>}
      <p>
        Total Amount : $
        {state.cart.reduce((acc, item) => (acc += item.price * item.qty), 0) -
          discount}
      </p>
      <div className="address-container">
          <Address/>
      </div>
      <button onClick={()=>handleClick()}>Checkout</button>
    </div>
  );
};
