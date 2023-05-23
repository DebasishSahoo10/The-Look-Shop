import { useContext } from "react"
import { FilterContext } from "../../contexts/FilterContext"

export const SearchBar = () => {
    const {dispatchFilters} = useContext(FilterContext)
    return (
        <div className="filter_search-bar">
            <p>Search</p>
            <input type="text" name="" id="" onChange={(e)=>dispatchFilters({type : "ADD_SEARCH", payload : e.target.value})}/>
        </div>
    )
}