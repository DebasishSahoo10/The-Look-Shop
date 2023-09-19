/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer} from "react";


export const DataContext = createContext()

const handleState = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS" : return {...state, products:action.payload}
        case "SET_CART" : return {...state, cart : action.payload}
        case "SET_WISHLIST" : return {...state, wishlist : action.payload}
        default : return state
    }
}

export const DataProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(handleState, {products : [], cart : [], wishlist : []})
    

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}