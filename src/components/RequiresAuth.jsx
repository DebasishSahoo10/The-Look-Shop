import { Navigate, useLocation } from "react-router"
import { useSelector } from "react-redux"

// eslint-disable-next-line react/prop-types
export const RequiresAuth = ({children}) => {
    const location = useLocation()
    const auth = useSelector(state => state.auth)
    const isLoggedin = auth.isLoggedin
    return isLoggedin ? (children) : (<Navigate to="/login" state={{from :location}}/>)
}