import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./ProductList.css";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { cartHandler } from "../../utils/clickHandlers";

export const AddToCart = ({ item }) => {
  const { state, dispatch } = useContext(DataContext);
  const { authToken, isLoggedin } = useContext(AuthContext);
  const [ isDisable, SetIsDisable] = useState(false)
  const cartClick = () => {
    cartHandler(item, authToken, dispatch)
    SetIsDisable(true)
  }
  return (
    <>
      {isLoggedin ? (
        <>
          {state.cart.some((prod) => prod.id === item.id) ? (
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
