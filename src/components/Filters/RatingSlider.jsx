import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import "./Filters.css"

export const RatingSlider = () => {
  const { filters, dispatchFilters } = useContext(FilterContext);
  const handleRatingSlide = (sliderValue) => {
    dispatchFilters({type : "ADD_RATING", payload : sliderValue})
  }
  return (
    <>
      <div className="filter_rating-slider">
        <p>Rating</p>
        <input
          type="range"
          min="0"
          max="5"
          value={filters.rating}
          className="slider"
          onChange={(e) =>handleRatingSlide(e.target.value)}
        />
      </div>
    </>
  );
};
