import "./Filters.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_GENDER } from "../../Redux/FilterSlice";

export const GenderFilter = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch()
  const handleGenderClick = (gender) => {
    if (filters.gender === gender) {
      dispatch(SET_GENDER(""))
    } else {
      dispatch(SET_GENDER(gender))
    }
  };
  return (
    <div className="filter_gender">
      <p>Gender</p>
      <input
        type="checkbox"
        name="gender"
        id="men-checkbox"
        checked={filters.gender === "men"}
        onClick={() => handleGenderClick("men")}
      />
      <label htmlFor="men-checkbox">Men</label>
      <input
        type="checkbox"
        name="gender"
        id="women-checkbox"
        checked={filters.gender === "women"}
        onClick={() => handleGenderClick("women")}
      />
      <label htmlFor="women-checkbox">Women</label>
    </div>
  );
};
