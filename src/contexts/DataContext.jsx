/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer} from "react";


export const DataContext = createContext()

const handleState = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS" : return {...state, products:action.payload}
        case "SET_CART" : return {...state, cart : action.payload}
        case "SET_WISHLIST" : return {...state, wishlist : action.payload}
        // case "ADD_TO_CART" : return {...state, cart:[...state.cart, action.payload]}
        // case "ADD_TO_WISHLIST" : return {...state, wishlist:[...state.wishlist, action.payload]}
        // case "REMOVE_FROM_CART" : return {...state, cart:[...state.cart.filter(item => item!==action.payload)]}
        // case "REMOVE_FROM_WISHLIST" : return {...state, wishlist : [...state.wishlist.filter(item => item !== action.payload)]}
        // case "MOVE_TO_CART" : return {...state, wishlist : [...state.wishlist.filter(item => item !== action.payload)], cart : [...state.cart, action.payload]}
        // case "INCREASE_QUANTITY" : return {...state, cart:[...state.cart.map(item => {if (item.id === action.payload.id) {return {...item, quantity: item.quantity+1}} else {return item}})]}
        // case "DECREASE_QUANTITY" : return {...state, cart:[...state.cart.map(item => {if (item.id === action.payload.id && item.quantity>1) {return {...item, quantity: item.quantity-1}} else {return item}})]}
        default : return state
    }
}

export const DataProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(handleState, {products : [], cart : [], wishlist : []})

    useEffect(()=>{
        (async()=>{
            try {
                const serverCall = await fetch("/api/products")
                const products = await serverCall.json()
                dispatch({type:"SET_PRODUCTS", payload: products.products})
            } catch(err) {
                console.log(err)
            }
        })()
    },[])

    

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}