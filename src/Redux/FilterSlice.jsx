import { createAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  gender: "",
  category: [],
  priceSort: "",
  rating: 0,
  search: "",
};

export const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers : {
    SET_GENDER : (state, action) => {
        state.gender = action.payload
    },
    ADD_CATEGORY : (state, action) => {
        state.category.push(action.payload)
    },
    REMOVE_CATEGORY : (state, action) => {
        const valueToRemove = action.payload
        const index = state.category.indexOf(valueToRemove)
        state.category.splice(index , 1)
    },
    ADD_PRICE_SORT : (state, action) => {
        state.priceSort = action.payload
    },
    ADD_RATING : (state, action) => {
        state.rating = action.payload
    },
    ADD_SEARCH : (state, action) => {
        state.search = action.payload.toLowerCase()
    },
    CLEAR_ALL_FILTERS : (state) => {
        state.gender = ""
        state.category = []
        state.priceSort = ""
        state.rating = 0
        state.search = ""
    }
  }
});

export const SET_GENDER = createAction('filters/SET_GENDER', (gender) => ({
    payload : gender
}))
export const ADD_CATEGORY = createAction('filters/ADD_CATEGORY', (category) => ({
    payload : category
}))
export const REMOVE_CATEGORY = createAction('filters/REMOVE_CATEGORY', (category) => ({
    payload : category
}))
export const ADD_PRICE_SORT = createAction('filters/ADD_PRICE_SORT', (priceSortMethod) => ({
    payload : priceSortMethod
}))
export const ADD_RATING = createAction('filters/ADD_RATING', (rating) => ({
    payload : rating
}))
export const ADD_SEARCH = createAction('filters/ADD_SEARCH', (searchParams) => ({
    payload : searchParams
}))
export const CLEAR_ALL_FILTERS = createAction('filters/CLEAR_ALL_FILTERS', () => ({}))