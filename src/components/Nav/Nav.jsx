import {NavLink} from 'react-router-dom'
import "./Nav.css"
import { useSelector } from 'react-redux';

const getNavLinkStyle = ({isActive}) => {
  if (isActive) {
    return {
      textDecoration : "underline"
    };
  }
  return {};
};

export const Nav = () => {
  const auth = useSelector(state => state.auth)
  const isLoggedin = auth.isLoggedin
  return (
    <nav className="nav">
      <div>
        <NavLink to="/" style={getNavLinkStyle}><p>Home</p></NavLink>
        <NavLink to="/products" style={getNavLinkStyle}><p>Products</p></NavLink>
        <NavLink to="/cart" style={getNavLinkStyle}><p>Cart</p></NavLink>
        <NavLink to="/wishlist" style={getNavLinkStyle}><p>Wishlist</p></NavLink>
      </div>
      <div>
        <NavLink to="/login"><button>{isLoggedin ? "Logged In" : "Log In"}</button></NavLink>
      </div>
    </nav>
  );
};
