import { useRef, useState } from "react"
import { useDispatch} from "react-redux"
import { ADD_SEARCH } from "../../Redux/FilterSlice"

export const SearchBar = () => {
    const [searchParams, setSearchParams] = useState()
    const dispatch = useDispatch()
    const timerID = useRef(null)
    const handleSearch = (searchParams) => {
        setSearchParams(searchParams)
        clearTimeout(timerID)
        timerID.current = setTimeout(()=>dispatch(ADD_SEARCH(searchParams)), 500)
    }
    return (
        <div className="filter_search-bar">
            <p>Search</p>
            <input type="text" name="" id="" onChange={(e)=>handleSearch(e.target.value)} value={searchParams}/>
        </div>
    )
}