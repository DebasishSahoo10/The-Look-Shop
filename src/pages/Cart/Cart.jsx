import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Cart.css";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { DataContext } from "../../contexts/DataContext";
import {
  cartItemDecrement,
  cartItemIncrement,
  cartItemRemoval
} from "../../utils/clickHandlers";
import { AuthContext } from "../../contexts/AuthContext";
import { AddToWishlist } from "../../components/ProductList/AddToWishlist";
import { PriceCheckout } from "./PriceCheckout";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { authToken } = useContext(AuthContext);
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
                      <img src={item.img} alt={`look for ${item.name}`} width={"150px"} height={"200px"}/>
                      <div className="product-list_card-details">
                        <NavLink to={`/products/${item.id}`}><p>{item.name}</p></NavLink>
                        <p>{item.price} $</p>
                        <p>Quantity : {item.qty}</p>
                        <div className="cart-btn-container">
                          <div>
                            <button onClick={() => item.qty > 1 && cartItemDecrement(item, authToken, dispatch)}>
                              -
                            </button>
                            <button onClick={() => cartItemIncrement(item, authToken, dispatch)}>
                              +
                            </button>
                          </div>
                          <button onClick={() => cartItemRemoval(item, authToken, dispatch)}>
                            Remove from Cart
                          </button>
                          <AddToWishlist item={item}/>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </div>
            <PriceCheckout/>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;