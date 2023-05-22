import { useContext } from "react";

import { DataContext } from "../../contexts/DataContext";
import { FilterContext } from "../../contexts/FilterContext";
import "./Filters.css"

export const CategoryFilter = () => {
  const { state } = useContext(DataContext);
  const {filters, dispatchFilters} = useContext(FilterContext)
  const categoriesList = state.products.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);
  const handleCategoryClick = (category ) => {
    if (filters.category.includes(category)) {
        dispatchFilters({type: "REMOVE_CATEGORY", payload : category})
    } else {
        dispatchFilters({type : "ADD_CATEGORY", payload : category})
    }
  }
  return (
    <>
      <div className="filter_category">
        <p>Category</p>
        <div>
          {categoriesList.map((itemCat) => {
            return (
              <li key={itemCat}>
                <input
                  type="checkbox"
                  name={`${itemCat} checkbox`}
                  id={itemCat}
                  checked={filters.category.includes(itemCat)}
                  onClick={() =>handleCategoryClick(itemCat)}
                />
                <label htmlFor={itemCat}>{itemCat}</label>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};
