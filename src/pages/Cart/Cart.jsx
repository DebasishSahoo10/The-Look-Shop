import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Cart.css";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { DataContext } from "../../contexts/DataContext";
import {
  cartItemDecrement,
  cartItemIncrement,
  cartItemRemoval,
  wishlistHandler
} from "../../utils/clickHandlers";
import { AuthContext } from "../../contexts/AuthContext";

export const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { authToken } = useContext(AuthContext);
  const [discount, setDiscount] = useState(0);
  return (
    <div>
      <Logo />
      <Nav />
      <div className="cart">
        {state.cart.length === 0 ? (
          <h2>Your Cart Is Empty</h2>
        ) : (
          <>
            <div className="cart-container">
              {state.cart &&
                state.cart.map((item) => {
                  return (
                    <li key={item.id}>
                      <img
                        src={item.img}
                        alt=""
                        width={"150px"}
                        height={"200px"}
                      />
                      <div className="product-card-details">
                        <NavLink to={`/products/${item.id}`}>
                          <p>{item.name}</p>
                        </NavLink>

                        <p>{item.price} $</p>
                        <p>Quantity : {item.qty}</p>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "5px",
                          }}
                        >
                          <div style={{ display: "flex", gap: "5px" }}>
                            <button
                              onClick={() =>
                                cartItemIncrement(item, authToken, dispatch)
                              }
                            >
                              +
                            </button>
                            <button
                              onClick={() =>
                                cartItemDecrement(item, authToken, dispatch)
                              }
                            >
                              -
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              cartItemRemoval(item, authToken, dispatch)
                            }
                          >
                            Remove from Cart
                          </button>
                          {state.wishlist.some(
                            (prod) => prod.id === item.id
                          ) ? (
                            <button>Added to Wishlist</button>
                          ) : (
                            <button
                              onClick={() =>wishlistHandler(item, authToken, dispatch)}
                            >
                              Add to Wishlist
                            </button>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </div>
            <div className="price-container">
              {state.cart.length > 0 && (
                <button onClick={() => setDiscount(55)}>Apply a Coupon</button>
              )}
              <p>Total items in Cart : {state.cart.length}</p>
              <p>Total Discount : {discount}$</p>
              <p>Delivery Charges : FREE</p>
              <p>
                Total Amount :{" "}
                {state.cart.reduce(
                  (acc, item) => (acc += item.price * item.qty),
                  0
                ) - discount}
                $
              </p>
              <button>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
