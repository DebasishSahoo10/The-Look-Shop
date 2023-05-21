import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router"

export const RequiresAuth = ({children}) => {
    const location = useLocation()
    const {isLoggedin} = useContext(AuthContext)
    return isLoggedin ? (children) : (<Navigate to="/login" state={{from :location}}/>)
}