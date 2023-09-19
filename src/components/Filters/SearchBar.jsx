import { useRef } from "react"

import { useDispatch} from "react-redux"
import { ADD_SEARCH } from "../../Redux/FilterSlice"

export const SearchBar = () => {
    const dispatch = useDispatch()
    const timerID = useRef(null)
    const handleSearch = (searchParams) => {
        clearTimeout(timerID)
        timerID.current = setTimeout(()=>dispatch(ADD_SEARCH(searchParams)), 500)
    }
    return (
        <div className="filter_search-bar">
            <p>Search</p>
            <input type="text" name="" id="" onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
    )
}