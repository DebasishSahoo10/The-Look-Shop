import "./Filters.css"
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRICE_SORT } from "../../Redux/FilterSlice";

export const PriceSort = () => {
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()

  const handlePriceSortClick = (sortType) => {
    dispatch(ADD_PRICE_SORT(sortType))
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
