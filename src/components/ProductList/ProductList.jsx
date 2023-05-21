import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./ProductList.css";
import { FilterContext } from "../../contexts/FilterContext";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { cartHandler, wishlistHandler } from "../../utils/clickHandlers";

export const ProductList = () => {
  const { state, dispatch } = useContext(DataContext);
  const { filters } = useContext(FilterContext);
  const {authToken} = useContext(AuthContext)
  let prodDB = state.products
    .filter(
      (item) =>
        (!filters.gender || item.gender === filters.gender) &&
        (filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
        item.rating >= filters.rating
    )
    .sort((a, b) => {
      if (filters.priceSort === "LTH") {
        return a.price - b.price;
      } else if (filters.priceSort === "HTL") {
        return b.price - a.price;
      } else {
        return;
      }
    });
  
  return (
    <>
      {prodDB.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.img} alt="" width={"150px"} />
            <div className="product-card-details">
              <NavLink to={`/products/${item.id}`}>
                <p>{item.name}</p>
              </NavLink>
              <p>{item.price} $</p>
              <p>{item.rating} ⭐</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {state.cart.some((prod) => prod.id === item.id) ? (
                  <NavLink to="/cart">
                    <button>Go to Cart</button>
                  </NavLink>
                ) : (
                  <button
                    onClick={() => cartHandler(item, authToken, dispatch)}
                  >
                    Add to Cart
                  </button>
                )}
                {state.wishlist.some((prod) => prod.id === item.id) ? (
                  <button>Added to Wishlist</button>
                ) : (
                  <button
                    onClick={() => wishlistHandler(item, authToken, dispatch)}
                  >
                    Add to Wishlist
                  </button>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};
