import "./Filters.css"
import { useDispatch } from "react-redux";
import { CLEAR_ALL_FILTERS } from "../../Redux/FilterSlice";


export const ClearButton = () => {
  const dispatch = useDispatch()
  const clearAllFilters = () => {
    dispatch(CLEAR_ALL_FILTERS())
  }
  return (
    <>
      <div className="filter_clear-button">
        <button onClick={() =>clearAllFilters()}>
          Clear All
        </button>
      </div>
    </>
  );
};
