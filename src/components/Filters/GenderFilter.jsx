import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import "./Filters.css"

export const GenderFilter = () => {
    const {filters, dispatchFilters} = useContext(FilterContext)
    const handleGenderClick = (gender) => {
        if (filters.gender === gender) {
            dispatchFilters({type : "SET_GENDER", payload: ""})
        } else {
            dispatchFilters({type : "SET_GENDER", payload: gender})
        }
    }
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
    )
}