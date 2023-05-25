import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./ProductList.css";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { wishlistHandler } from "../../utils/clickHandlers";

export const AddToWishlist = ({ item }) => {
    const { state, dispatch } = useContext(DataContext);
    const { authToken, isLoggedin } = useContext(AuthContext);
    const [ isDisable, SetIsDisable] = useState(false)
    const wishlistClick = () => {
      wishlistHandler(item, authToken, dispatch)
      SetIsDisable(true)
    }
  return (
    <>
      {isLoggedin ? (
        <>
          {state.wishlist.some((prod) => prod.id === item.id) ? (
            <button>Added to Wishlist</button>
          ) : (
            <button onClick={() => wishlistClick()} disabled={isDisable}>
              Add to Wishlist
            </button>
          )}
        </>
      ) : (
        <>
          <NavLink to="/login">
            <button className="wishlist-btn">Add to wishlist</button>
          </NavLink>
        </>
      )}
    </>
  );
};
