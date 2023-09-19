import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./ProductList.css";

import { wishlistHandler } from "../../utils/clickHandlers";
import { useDispatch, useSelector } from "react-redux";

export const AddToWishlist = ({ item }) => {
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const authToken = auth.authToken
    const isLoggedin = auth.isLoggedin
    const [ isDisable, SetIsDisable] = useState(false)
    const wishlistClick = () => {
      wishlistHandler(item, authToken, dispatch)
      SetIsDisable(true)
    }
  return (
    <>
      {isLoggedin ? (
        <>
          {data.wishlist.some((prod) => prod.id === item.id) ? (
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
