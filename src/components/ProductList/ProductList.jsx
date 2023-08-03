import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./ProductList.css";
import { FilterContext } from "../../contexts/FilterContext";
import { DataContext } from "../../contexts/DataContext";
import { AddToCart } from "./AddToCart";
import { AddToWishlist } from "./AddToWishlist";

export const ProductList = () => {
  const { state } = useContext(DataContext);
  const { filters } = useContext(FilterContext);

  let prodDB = state.products
    .filter(
      (item) =>
        (!filters.gender || item.gender === filters.gender) &&
        (filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
        (item.rating >= filters.rating) && (filters.search.length === 0 || item.name.toLowerCase().includes(filters.search))
    )
    .sort((a, b) =>
      filters.priceSort === "LTH"
        ? a.price - b.price
        : filters.priceSort === "HTL"
        ? b.price - a.price
        : 0
    )

  return (
    <>
      {prodDB.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.img} alt={`look for ${item.name}`} width={"150px"} style={{objectFit : "cover"}}/>
            <div className="product-list_card-details">
              <NavLink to={`/products/${item.id}`}>
                <p>{item.name}</p>
              </NavLink>
              <p>{item.price} $</p>
              <p>{item.rating} ⭐</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                <AddToCart item={item}/>
                <AddToWishlist item={item}/>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};
