import {NavLink} from 'react-router-dom'
import "./Nav.css"

const getNavLinkStyle = ({isActive}) => {
  if (isActive) {
    return {
      textDecoration : "underline"
    };
  }
  return {};
};

export const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/" style={getNavLinkStyle}><p>Home</p></NavLink>
        <NavLink to="/products" style={getNavLinkStyle}><p>Products</p></NavLink>
        <NavLink to="/cart" style={getNavLinkStyle}><p>Cart</p></NavLink>
        <NavLink to="/wishlist" style={getNavLinkStyle}><p>Wishlist</p></NavLink>
      </div>
      <div>
        <button>Log In</button>
      </div>
    </nav>
  );
};
