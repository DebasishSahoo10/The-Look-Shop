import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import "./Filters.css"

export const PriceSort = () => {
  const { filters, dispatchFilters } = useContext(FilterContext);
  const handlePriceSortClick = (sortType) => {
    dispatchFilters({type : "ADD_PRICE_SORT", payload : sortType})
  }
  return (
    <>
      <div className="filter_price-sort">
        <p>Price Sort</p>
        <div>
          <input
            type="radio"
            id="LTH"
            checked={filters.priceSort === "LTH"}
            onClick={() =>handlePriceSortClick("LTH")}
            name="pricesort"
          />
          <label htmlFor="LTH">Low to High</label>
          <input
            type="radio"
            id="HTL"
            checked={filters.priceSort === "HTL"}
            onClick={() =>handlePriceSortClick("HTL")}
            name="pricesort"
          />
          <label htmlFor="HTL">High to Low</label>
        </div>
      </div>
    </>
  );
};
