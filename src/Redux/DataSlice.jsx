import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {products : [], cart : [], wishlist : []}

export const DataSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {
        SET_PRODUCTS : (state, action) => {
            state.products = action.payload
        },
        SET_CART : (state, action) => {
            state.cart = action.payload
        },
        SET_WISHLIST : (state, action) => {
            state.wishlist = action.payload
        }
    }
})

export const SET_PRODUCTS = createAction('data/SET_PRODUCTS', (products) => ({
    payload : products
}))
export const SET_CART = createAction('data/SET_CART', (cart) => ({
    payload : cart
}))
export const SET_WISHLIST = createAction('data/SET_WISHLIST', (wishlist) => ({
    payload : wishlist
}))