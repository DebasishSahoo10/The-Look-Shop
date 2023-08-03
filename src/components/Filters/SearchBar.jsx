import { useContext, useRef } from "react"
import { FilterContext } from "../../contexts/FilterContext"

export const SearchBar = () => {
    const {dispatchFilters} = useContext(FilterContext)
    const timerID = useRef(null)
    const handleSearch = (searchParams) => {
        clearTimeout(timerID)
        timerID.current = setTimeout(()=>dispatchFilters({type : "ADD_SEARCH", payload : searchParams}), 500)
    }
    return (
        <div className="filter_search-bar">
            <p>Search</p>
            <input type="text" name="" id="" onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
    )
}