import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import "./Filters.css"

export const ClearButton = () => {
  const { dispatchFilters } = useContext(FilterContext);
  const clearAllFilters = () => {
    dispatchFilters({type : "CLEAR_ALL_FILTERS"})
  }
  return (
    <>
      <div className="clear-button">
        <button
          onClick={() =>clearAllFilters()}
        >
          Clear All
        </button>
      </div>
    </>
  );
};
