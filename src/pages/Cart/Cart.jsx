import { useContext, useState } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { DataContext } from "../../contexts/DataContext";
import "./Cart.css";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
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
                        <p>Quantity : {item.quantity}</p>
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
                                dispatch({
                                  type: "INCREASE_QUANTITY",
                                  payload: item,
                                })
                              }
                            >
                              +
                            </button>
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "DECREASE_QUANTITY",
                                  payload: item,
                                })
                              }
                            >
                              -
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: item,
                              })
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
                              onClick={() =>
                                dispatch({
                                  type: "ADD_TO_WISHLIST",
                                  payload: item,
                                })
                              }
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
                  (acc, item) => (acc += item.price * item.quantity),
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
