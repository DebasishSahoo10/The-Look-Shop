/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const FilterContext = createContext();

const handleFilters = (state, action) => {
    switch (action.type) {
        case "SET_GENDER" : return {...state, gender : action.payload}
        case "ADD_CATEGORY" : return {...state, category: [...state.category, action.payload]}
        case "REMOVE_CATEGORY" : return {...state, category: [...state.category.filter((category) => category !== action.payload)]}
        case "ADD_PRICE_SORT" : return {...state, priceSort : action.payload}
        case "ADD_RATING" : return {...state, rating : action.payload}
        case "ADD_SEARCH" : return {...state, search : action.payload.toLowerCase()}
        case "CLEAR_ALL_FILTERS" : return {gender: "",category: [],priceSort: "",rating: 0, search : ""}
        default : return state
    }
}

export const FilterProvider = ({ children }) => {
  const [ filters, dispatchFilters ] = useReducer(handleFilters, {
    gender: "",
    category: [],
    priceSort: "",
    rating: 0,
    search : ""
  });
  return <FilterContext.Provider value={{filters, dispatchFilters}}>{children}</FilterContext.Provider>;
};
