import "./Filters.css"
import { useDispatch, useSelector } from "react-redux";
import { ADD_RATING } from "../../Redux/FilterSlice";


export const RatingSlider = () => {
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  const handleRatingSlide = (sliderValue) => {
    dispatch(ADD_RATING(sliderValue))
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
