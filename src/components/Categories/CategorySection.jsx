import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Categories.css";
import { DataContext } from "../../contexts/DataContext";
import { FilterContext } from "../../contexts/FilterContext";

export const CategorySection = ({ gender }) => {
  const { state } = useContext(DataContext);
  const { dispatchFilters } = useContext(FilterContext);
  const navigate = useNavigate();
  const handleCategoryNavigate = (gender) => {
    dispatchFilters({ type: "SET_GENDER", payload: gender });
    navigate("/products");
  };
  return (
    <div className="category_section">
      <div className="category_header">
        <p>{gender.toUpperCase()} CHARACTERS</p>
        <p
          className="category_show-all"
          onClick={() => handleCategoryNavigate(gender)}
          aria-label={`Show all ${gender} characters`}
        >
          SHOW ALL
        </p>
      </div>
      <ul className="category_card-container">
        {state.products
          .filter((item) => item.gender === gender)
          .slice(0, 4)
          .map((item) => (
            <li key={item.id} className="category_card">
              <img
                src={item.img}
                alt={`${item.name}`}
                width="150"
                height="200"
              />
              <p>
                <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
