import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./ProductList.css";
import { cartHandler } from "../../utils/clickHandlers";
import { useDispatch, useSelector } from "react-redux";

export const AddToCart = ({ item }) => {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const authToken = auth.authToken
  const isLoggedin = auth.isLoggedin
  const [ isDisable, SetIsDisable] = useState(false)
  const cartClick = () => {
    cartHandler(item, authToken, dispatch)
    SetIsDisable(true)
  }
  return (
    <>
      {isLoggedin ? (
        <>
          {data.cart.some((prod) => prod.id === item.id) ? (
            <NavLink to="/cart">
              <button>Go to Cart</button>
            </NavLink>
          ) : (
            <button onClick={() => cartClick()} disabled={isDisable}>
              Add to Cart
            </button>
          )}
        </>
      ) : (
        <>
          <NavLink to="/login">
            <button>Add to Cart</button>
          </NavLink>
        </>
      )}
    </>
  );
};
